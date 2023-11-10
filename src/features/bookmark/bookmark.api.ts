import { authAxios } from '../auth/auth.api';

export const fetchBookmarkList = async () => {
  const { data } =
    await authAxios.get<ResponseType<CollectionListItem[]>>('/bookmarks');

  return data.data;
};
