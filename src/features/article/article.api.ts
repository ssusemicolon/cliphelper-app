import { authAxios } from '../auth/auth.api';

export const fetchArticleList = async () => {
  const { data } =
    await authAxios.get<ResponseType<ArticleListItem[]>>('/articles');
  console.log(data);
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
  const formData = new FormData();
  Object.entries(form).forEach(([key, value]) => {
    if (value === undefined) {
      return;
    }
    formData.append(key, value);
  });
  const data = await authAxios.post('/articles', formData);
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
