import messaging from '@react-native-firebase/messaging';
import { isAxiosError } from 'axios';
import { useCallback } from 'react';
import { sendFcmToken } from '~/features/user/user.api';

export const useFcm = () => {
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
    });
    return unsubscribe;
  }, [getFcmToken]);

  return sendFcm;
};
