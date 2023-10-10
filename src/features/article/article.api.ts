import { authAxios } from '../auth/auth.api';
import demoArticleList from './article-list.json';

export const fetchArticleList = async () => {
  // const { data } = await authAxios.get<ResponseType<ArticleList>>('/article');
  // return data.data;
  return demoArticleList.articles;
};

export const fetchArticleDetail = async (id: number) => {
  const { data } = await authAxios.get<ResponseType<ArticleDetail>>(
    `/article/${id}`,
  );
  return data.data;
};

export const appendArticle = async (form: ArticleAppendForm) => {
  const { data } = await authAxios.post('/article', form);
  return data.data;
};

export const removeArticle = async (id: number) => {
  const { data } = await authAxios.delete(`/article/${id}`);
  return data.data;
};
