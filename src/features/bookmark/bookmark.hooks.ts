import { useQuery } from '@tanstack/react-query';
import { fetchBookmarkList } from './bookmark.api';

const bookmarkKeys = {
  all: 'bookmark',
  list: () => [...bookmarkKeys.all, 'list'],
  detail: (id: number) => [...bookmarkKeys.all, 'detail', { id }],
};

/** fetch bookmark list */
export const useBookmarkList = () => {
  return useQuery(bookmarkKeys.list(), () => fetchBookmarkList());
};
