import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { doBookmark, fetchBookmarkList, undoBookmark } from './bookmark.api';
import { errorHandler } from '~/utils/errorHandler';
import { collectionKeys } from '../collection/collection.hooks';

const bookmarkKeys = {
  all: 'bookmark',
  list: () => [...bookmarkKeys.all, 'list'],
  detail: (id: number) => [...bookmarkKeys.all, 'detail', { id }],
};

/** fetch bookmark list */
export const useBookmarkList = () => {
  return useQuery(bookmarkKeys.list(), () => fetchBookmarkList());
};

/** do bookmark  */
export const useBookmarkMutation = (collectionId: number) => {
  const queryClient = useQueryClient();
  return useMutation(doBookmark, {
    onSuccess: () => {
      queryClient.invalidateQueries(collectionKeys.popular());
      queryClient.invalidateQueries(bookmarkKeys.list());
      queryClient.invalidateQueries(bookmarkKeys.detail(collectionId));
    },
    onError: errorHandler,
  });
};

/** undo bookmark  */
export const useUndoBookmarkMutation = (collectionId: number) => {
  const queryClient = useQueryClient();
  return useMutation(undoBookmark, {
    onSuccess: () => {
      queryClient.invalidateQueries(collectionKeys.popular());
      queryClient.invalidateQueries(bookmarkKeys.list());
      queryClient.invalidateQueries(bookmarkKeys.detail(collectionId));
    },
    onError: errorHandler,
  });
};
