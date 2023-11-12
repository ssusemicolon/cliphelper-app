import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

export const publicAxios = axios.create({
  baseURL: BASE_URL,
});

export const authAxios = axios.create({
  baseURL: BASE_URL,
});

export const login = async ({ type, key }: LoginForm) => {
  const { data } = await publicAxios.post<SignInResponse>('/auth/login', {
    type,
    key,
  });
  return data;
};

export const reissueToken = async (refreshToken: string) => {
  const { data } = await authAxios.post<SignInResponse>('/auth/reissue', {
    refreshToken,
  });
  return data;
};

export const logout = async (refreshToken: string) => {
  const { data } = await authAxios.post('/auth/logout', { refreshToken });
  return data;
};
