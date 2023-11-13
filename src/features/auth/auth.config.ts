import { useCallback, useRef } from 'react';
import { authAxios, reissueTokenApi } from './auth.api';

import { jwtDecode } from 'jwt-decode';
import { useLogoutMutation, useTokenService } from './auth.hooks';

let tokenExpireCache: { [key: string]: number } = {};

export const setAccessTokenInAxiosHeaders = (token: string) => {
  authAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getTokenExpireTime = (accessToken: string) => {
  const cached = tokenExpireCache[accessToken];
  if (cached) {
    return cached;
  }
  tokenExpireCache[accessToken] = jwtDecode(accessToken).exp || 0;
  return tokenExpireCache[accessToken];
};

const isExpired = (accessToken: string) => {
  const nowDate = new Date().getTime() / 1000;
  return getTokenExpireTime(accessToken) < nowDate;
};

/** axios */
export const useConfigAuthAxios = () => {
  const { getToken, setToken } = useTokenService();
  const { mutate: logoutMutation } = useLogoutMutation();
  const counter = useRef<number>(1);

  const resetCounter = () =>
    setTimeout(() => {
      counter.current = 1;
    }, 500);

  const checkToken = useCallback(
    async (config: any) => {
      const { accessToken, refreshToken } = await getToken();
      console.log('check token');

      if (!accessToken) {
        return config;
      }

      if (isExpired(accessToken) && counter.current > 0) {
        counter.current = 0;

        try {
          console.log('reissue!');
          const newToken = await reissueTokenApi(accessToken, refreshToken);
          console.log('end: reissue');
          if (newToken) {
            setAccessTokenInAxiosHeaders(newToken.accessToken);
            if (config.headers) {
              config.headers.Authorization = `Bearer ${newToken.accessToken}`;
            }
            await setToken(newToken.accessToken, newToken.refreshToken);
          }
          resetCounter();
        } catch (error) {
          console.log('failed to refresh token: ', error);
          resetCounter();
          logoutMutation();
        }
      }

      return config;
    },
    [getToken, logoutMutation, setToken],
  );

  const axiosConfiguration = useCallback(async () => {
    authAxios.interceptors.request.use(checkToken);
  }, [checkToken]);

  return { axiosConfiguration };
};
