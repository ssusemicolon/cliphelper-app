import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import * as KeyChain from 'react-native-keychain';
import { useAppDispatch } from '~/store';
import { authActions } from '~/store/slices/authSlice';
import { login, logout } from './auth.api';

import { setAccessTokenInAxiosHeaders } from './auth.config';

type token = {
  accessToken: string;
  refreshToken: string;
};

/** login */
export const useLoginMutation = () => {
  const dispatch = useAppDispatch();
  const { setToken } = useTokenService();

  return useMutation(login, {
    onSuccess: async (tokens: SignInResponse) => {
      const { accessToken, refreshToken, userId } = tokens;
      await setToken(accessToken, refreshToken);
      setAccessTokenInAxiosHeaders(accessToken);
      dispatch(authActions.setSigned({ isSigned: true, userId }));
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
        dispatch(authActions.setSigned({ isSigned: false, userId: 0 }));
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
