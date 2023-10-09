import { authAxios } from '../auth/auth.api';

export const fetchCollectionList = async (type: CollectionType = 'MY') => {
  return await authAxios.get<ResponseType<CollectionList>>('/collection', {
    params: {
      type,
    },
  });
};

export const fetchCollectionDetail = async (id: number) => {
  return await authAxios.get<ResponseType<CollectionDetail>>(
    `/collection/${id}`,
  );
};

export const appendCollection = async (form: CollectionAppendForm) => {
  return await authAxios.post('/collection', form);
};

export const removeCollection = async (id: number) => {
  return await authAxios.delete(`/collection/${id}`);
};
