import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  appendArticle,
  fetchArticleDetail,
  fetchArticleList,
  modifyArticle,
  removeArticle,
} from './article.api';

const articleKeys = {
  all: 'article',
  list: () => [...articleKeys.all, 'list'],
  detail: (id: number) => [...articleKeys.all, 'detail', { id }],
};

/** fetch article list */
export const useArticleList = () => {
  return useQuery(articleKeys.list(), () => fetchArticleList());
};

/** fetch article detail */
export const useArticleDetail = (id: number) => {
  return useQuery(articleKeys.detail(id), () => fetchArticleDetail(id));
};

/** append article */
export const useArticleAppendMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(appendArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(articleKeys.list());
    },
  });
};

export const useArticleModifyMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation(modifyArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(articleKeys.list());
      queryClient.invalidateQueries(articleKeys.detail(id));
    },
  });
};

/** remove article */
export const useArticleRemoveMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(removeArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(articleKeys.list());
    },
  });
};
