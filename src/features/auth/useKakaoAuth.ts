import * as KakaoLogin from '@react-native-seoul/kakao-login';
import { isAxiosError } from 'axios';

export const useKakaoAuth = () => {
  const login = async () => {
    console.log('is invoked');
    try {
      const result = await KakaoLogin.login();
      console.log('Login Success', JSON.stringify(result));
      return result;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.code === 'E_CANCELLED_OPERATION') {
          console.log('Login Cancel', error.message);
        } else {
          console.log(`Login Fail(code:${error.code})`, error.message);
        }
      }
    }
  };

  const logout = async () => {
    console.log('is invoked');
    try {
      const result = await KakaoLogin.logout();
      return result;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.code === 'E_CANCELLED_OPERATION') {
          console.log('Login Cancel', error.message);
        } else {
          console.log(`Login Fail(code:${error.code})`, error.message);
        }
      }
    }
  };

  return { login, logout };
};
