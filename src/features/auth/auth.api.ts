import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

export const publicAxios = axios.create({
  baseURL: BASE_URL,
});

export const authAxios = axios.create({
  baseURL: BASE_URL,
});

export const login = async ({ type, key }: LoginForm) => {
  const { data } = await publicAxios.post<ResponseType<SignInResponse>>(
    '/auth/login',
    {
      type,
      key,
    },
  );
  return data.data;
};

export const reissueTokenApi = async (
  accessToken: string,
  refreshToken: string,
) => {
  const { data } = await publicAxios.post<ResponseType<SignInResponse>>(
    '/auth/reissue',
    {
      refreshToken,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return data.data;
};

export const logout = async (refreshToken: string) => {
  const { data } = await authAxios.post('/auth/logout', { refreshToken });
  return data;
};
