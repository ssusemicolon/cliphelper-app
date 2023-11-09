import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  appendCollection,
  fetchCollectionDetail,
  fetchCollectionList,
  removeCollection,
} from './collection.api';

export const collectionKeys = {
  all: 'collection',
  list: () => [...collectionKeys.all, 'list'],
  detail: (id: number) => [...collectionKeys.all, 'detail', { id }],
};

/** fetch collection list */
export const useCollectionList = () => {
  return useQuery(collectionKeys.list(), () => fetchCollectionList());
};

/** fetch collection detail */
export const useCollectionDetail = (id: number) => {
  return useQuery(collectionKeys.detail(id), () => fetchCollectionDetail(id));
};

/** append collection */
export const useCollectionAppendMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(appendCollection, {
    onSuccess: () => {
      queryClient.invalidateQueries(collectionKeys.list());
    },
  });
};

/** remove collection */
export const useCollectionRemoveMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(removeCollection, {
    onSuccess: () => {
      queryClient.invalidateQueries(collectionKeys.list());
    },
  });
};
