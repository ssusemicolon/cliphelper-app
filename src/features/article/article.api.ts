import { authAxios } from '../auth/auth.api';

export const fetchArticleList = async () => {
  const { data } =
    await authAxios.get<ResponseType<ArticleListItem[]>>('/articles');
  return data.data;
};

export const fetchArticleDetail = async (id: number) => {
  const { data } = await authAxios.get<ResponseType<ArticleDetail>>(
    `/articles/${id}`,
  );
  return data.data;
};

export const fetchArticleCollections = async (id: number) => {
  const { data } = await authAxios.get<ResponseType<number[]>>(
    `/articles/${id}/collections`,
  );
  return data.data;
};

export const modifyArticleCollection = async ({
  id,
  collections,
}: {
  id: number;
  collections: number[];
}) => {
  const { data } = await authAxios.patch<ResponseType<{}>>(
    `/articles/${id}/collections`,
    collections,
  );
  return data.data;
};

export const appendArticle = async (form: ArticleAppendForm) => {
  const data = await authAxios.post('/articles', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data.data;
};

export const modifyArticle = async (form: ArticleAppendForm) => {
  const { articleId, ...others } = form;
  const data = await authAxios.patch(`/articles/${articleId}`, others);
  return data.data;
};

export const removeArticle = async (id: number) => {
  const { data } = await authAxios.delete(`/articles/${id}`);
  return data.data;
};
