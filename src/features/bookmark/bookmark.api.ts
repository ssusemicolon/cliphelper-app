import { authAxios } from '../auth/auth.api';

export const fetchBookmarkList = async () => {
  const { data } =
    await authAxios.get<ResponseType<CollectionListItem[]>>('/bookmarks');

  return data.data;
};

export const doBookmark = async (collectionId: number) => {
  const { data } = await authAxios.post('/bookmarks', {
    collectionId,
  });
  console.log('do bookmark!: ', collectionId);
  return data.data;
};

export const undoBookmark = async (collectionId: number) => {
  const { data } = await authAxios.delete(`/bookmarks/${collectionId}`);
  console.log('undo bookmark!: ', collectionId);
  return data.data;
};
