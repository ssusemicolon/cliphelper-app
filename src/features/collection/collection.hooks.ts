import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  appendCollection,
  fetchCollectionDetail,
  fetchCollectionList,
  fetchPopularCollectionList,
  modifyCollection,
  removeCollection,
} from './collection.api';

export const collectionKeys = {
  all: 'collection',
  list: () => [...collectionKeys.all, 'list'],
  popular: () => [...collectionKeys.all, 'popular'],
  detail: (id: number) => [...collectionKeys.all, 'detail', { id }],
};

/** fetch collection list */
export const useCollectionList = () => {
  return useQuery(collectionKeys.list(), () => fetchCollectionList());
};

/** fetch popular collection list */
export const usePopularCollectionList = () => {
  return useQuery(collectionKeys.popular(), () => fetchPopularCollectionList());
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

/** modify collection */
export const useCollectionModifyMutation = (collectionId: number) => {
  const queryClient = useQueryClient();
  return useMutation(modifyCollection, {
    onSuccess: () => {
      queryClient.invalidateQueries(collectionKeys.list());
      queryClient.invalidateQueries(collectionKeys.detail(collectionId));
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
