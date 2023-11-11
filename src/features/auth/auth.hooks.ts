import { useMutation } from '@tanstack/react-query';
import axios, { AxiosHeaders, isAxiosError } from 'axios';
import { useCallback, useRef } from 'react';
import * as KeyChain from 'react-native-keychain';
import { useAppDispatch } from '~/store';
import { authActions } from '~/store/slices/authSlice';
import { authAxios, login, logout, reissueToken } from './auth.api';

type token = {
  accessToken: string;
  refreshToken: string;
};

/** login */
export const useLoginMutation = () => {
  const dispatch = useAppDispatch();
  const { setToken } = useTokenService();
  const configAxios = useConfigAuthAxios();

  return useMutation(login, {
    onSuccess: async (tokens: SignInResponse) => {
      await setToken(tokens.accessToken, tokens.refreshToken);
      await configAxios();
      dispatch(authActions.setSigned(true));
    },
  });
};

/** logout */
export const useLogoutMutation = () => {
  const dispatch = useAppDispatch();
  const { resetToken, getToken } = useTokenService();

  return useMutation(
    async () => {
      const { refreshToken } = await getToken();
      await logout(refreshToken);
    },
    {
      onSuccess: async () => {
        await resetToken();
        dispatch(authActions.setSigned(false));
      },
      onError: (e) => {
        console.log('error: ', e);
        if (isAxiosError(e)) {
          console.log('error: ', e.response?.data);
        }
      },
    },
  );
};

/** token manager */
export const useTokenService = () => {
  const setToken = async (accessToken: string, refreshToken: string) => {
    console.log('set AT token: ', accessToken);
    console.log('set RT token: ', refreshToken);
    await KeyChain.setGenericPassword(
      'tokens',
      JSON.stringify({ accessToken, refreshToken }),
    );
  };

  const resetToken = async () => {
    await KeyChain.resetGenericPassword();
  };

  const getToken = async () => {
    const credentials = await KeyChain.getGenericPassword();
    if (!credentials) {
      return { accessToken: '', refreshToken: '' };
    }

    return JSON.parse(credentials.password) as token;
  };

  return { setToken, resetToken, getToken };
};

/** axios */
export const useConfigAuthAxios = () => {
  const { getToken, setToken, resetToken } = useTokenService();
  const dispatch = useAppDispatch();
  const { mutate: logoutMutation } = useLogoutMutation();
  const requestInterceptorId = useRef<number | null>(null);
  const responseInterceptorId = useRef<number | null>(null);

  return useCallback(async () => {
    const { accessToken, refreshToken } = await getToken();

    if (accessToken && refreshToken) {
      dispatch(authActions.setSigned(true));
    }

    if (requestInterceptorId.current !== null) {
      authAxios.interceptors.request.eject(requestInterceptorId.current);
    }

    if (responseInterceptorId.current !== null) {
      authAxios.interceptors.response.eject(responseInterceptorId.current);
    }

    requestInterceptorId.current = authAxios.interceptors.request.use(
      (config) => {
        if (config.headers && accessToken) {
          (config.headers as AxiosHeaders).set(
            'Authorization',
            `Bearer ${accessToken}`,
          );
        }

        return config;
      },
      (error) => {
        if (isAxiosError(error)) {
          console.log(error.response?.data);
        }
        return Promise.reject(error);
      },
    );

    responseInterceptorId.current = authAxios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const {
          config: originalRequest,
          response: { status, code },
        } = error;

        if (status === 401 && code === 'EU006' && accessToken && refreshToken) {
          try {
            const newTokens = await reissueToken(refreshToken);
            await setToken(newTokens.accessToken, newTokens.refreshToken);
            originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
            return axios(originalRequest);
          } catch (_) {
            await resetToken();
          }
        }

        if (status === 401 && code === 'EU005' && refreshToken) {
          logoutMutation();
        }

        return Promise.reject(error);
      },
    );
  }, [dispatch, getToken, logoutMutation, resetToken, setToken]);
};
