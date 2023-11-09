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

export const appendArticle = async (form: ArticleAppendForm) => {
  const data = await authAxios.post('/articles', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data.data;
};

export const removeArticle = async (id: number) => {
  const { data } = await authAxios.delete(`/articles/${id}`);
  return data.data;
};
