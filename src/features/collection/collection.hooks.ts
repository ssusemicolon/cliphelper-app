import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  appendCollection,
  fetchCollectionDetail,
  fetchCollectionList,
  removeCollection,
} from './collection.api';

const collectionKeys = {
  all: 'collection',
  list: () => [...collectionKeys.all, 'list'],
  detail: (id: number) => [...collectionKeys.all, 'detail', { id }],
};

/** fetch collection list */
export const useCollectionList = () => {
  return useQuery(collectionKeys.list(), () => fetchCollectionList());
};

/** fetch article detail */
export const useArticleDetail = (id: number) => {
  return useQuery(collectionKeys.detail(id), () => fetchCollectionDetail(id));
};

/** append article */
export const useArticleAppendMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(appendCollection, {
    onSuccess: () => {
      queryClient.invalidateQueries(collectionKeys.list());
    },
  });
};

/** remove article */
export const useArticleRemoveMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(removeCollection, {
    onSuccess: () => {
      queryClient.invalidateQueries(collectionKeys.list());
    },
  });
};
