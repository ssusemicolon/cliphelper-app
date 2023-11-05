import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const useGoogleAuth = () => {
  const GOOGLE_WEB_CLIENT_ID =
    '161501675331-qdnkgomqigf1fhaeifjq62vefld01evu.apps.googleusercontent.com';

  GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    offlineAccess: true,
  });

  const login = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  };

  return { login };
};
