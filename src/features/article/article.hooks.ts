import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { errorHandler } from '~/utils/errorHandler';
import { collectionKeys } from '../collection/collection.hooks';
import {
  appendArticle,
  fetchArticleCollections,
  fetchArticleDetail,
  fetchArticleList,
  modifyArticle,
  modifyArticleCollection,
  removeArticle,
} from './article.api';

export const articleKeys = {
  all: 'article',
  list: () => [...articleKeys.all, 'list'],
  detail: (id: number) => [...articleKeys.all, 'detail', { id }],
  collection: (id: number) => [...articleKeys.all, 'collection', { id }],
};

/** fetch article list */
export const useArticleList = () => {
  return useQuery(articleKeys.list(), () => fetchArticleList());
};

/** fetch article detail */
export const useArticleDetail = (id: number) => {
  return useQuery(articleKeys.detail(id), () => fetchArticleDetail(id));
};

/** fetch article collections */
export const useArticleCollections = (id: number) => {
  return useQuery(articleKeys.collection(id), () =>
    fetchArticleCollections(id),
  );
};

export const useArticleCollectionMutation = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation(modifyArticleCollection, {
    onSuccess: () => {
      queryClient.invalidateQueries(articleKeys.collection(id));
      queryClient.invalidateQueries(collectionKeys.list());
    },
    onError: errorHandler,
  });
};

/** append article */
export const useArticleAppendMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(appendArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(articleKeys.list());
    },
    onError: errorHandler,
  });
};

export const useArticleModifyMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation(modifyArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(articleKeys.list());
      queryClient.invalidateQueries(articleKeys.detail(id));
    },
    onError: errorHandler,
  });
};

/** remove article */
export const useArticleRemoveMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(removeArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(articleKeys.list());
    },
    onError: errorHandler,
  });
};
