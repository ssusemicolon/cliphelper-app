import { authAxios } from '../auth/auth.api';

export const fetchBookmarkList = async () => {
  const { data } =
    await authAxios.get<ResponseType<CollectionListItem[]>>('/collections');

  return data.data;
};

export const fetchCollectionDetail = async (id: number) => {
  const { data } = await authAxios.get<ResponseType<CollectionDetail>>(
    `/collections/${id}`,
  );

  return data.data;
};

export const appendCollection = async (form: CollectionAppendForm) => {
  const { data } = await authAxios.post('/collections', form);
  return data;
};

export const removeCollection = async (id: number) => {
  const { data } = await authAxios.delete(`/collections/${id}`);
  return data;
};
