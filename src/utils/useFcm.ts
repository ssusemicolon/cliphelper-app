import messaging from '@react-native-firebase/messaging';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { isAxiosError } from 'axios';
import { useCallback } from 'react';
import { sendFcmToken } from '~/features/user/user.api';
import { RootStackParamList } from '~/navigations/RootStackNavigator';

export const useFcm = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    return enabled;
  }

  const getFcmToken = useCallback(async () => {
    const enabled = await requestUserPermission();

    if (!enabled) {
      return;
    }

    try {
      const fcmToken = await messaging().getToken();
      console.log('fcm token: ', fcmToken);
      await sendFcmToken(fcmToken);
    } catch (error) {
      if (isAxiosError(error)) {
        console.error('get fcm error: ', error.response?.data.message);
      }
    }
  }, []);

  const sendFcm = useCallback(async () => {
    await getFcmToken();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('[Remote Message] ', JSON.stringify(remoteMessage));
      const articleId = Number(remoteMessage?.data?.articleId || 0);
      articleId > 0 &&
        navigation.navigate('Article', {
          screen: 'Detail',
          params: {
            id: articleId,
          },
        });
    });
    return unsubscribe;
  }, [getFcmToken, navigation]);

  return sendFcm;
};
