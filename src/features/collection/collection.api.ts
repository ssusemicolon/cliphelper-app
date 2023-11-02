import { authAxios } from '../auth/auth.api';

export const fetchCollectionList = async (type: CollectionType = 'MY') => {
  const { data } = await authAxios.get<ResponseType<CollectionList>>(
    '/collection',
    {
      params: {
        type,
      },
    },
  );

  return data.data;
};

export const fetchCollectionDetail = async (id: number) => {
  const { data } = await authAxios.get<ResponseType<CollectionDetail>>(
    `/collection/${id}`,
  );

  return data.data;
};

export const appendCollection = async (form: CollectionAppendForm) => {
  const { data } = await authAxios.post('/collection', form);
  return data;
};

export const removeCollection = async (id: number) => {
  const { data } = await authAxios.delete(`/collection/${id}`);
  return data;
};
