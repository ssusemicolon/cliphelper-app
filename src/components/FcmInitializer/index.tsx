import React, { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { useAppDispatch } from '~/store';
import { fcmActions } from '~/store/slices/fcmSlice';

export const FcmInitializer = () => {
  const dispatch = useAppDispatch();

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
      dispatch(fcmActions.setFcm({ token: fcmToken, deviceType: Platform.OS }));
    } catch (error) {
      console.error('get fcm error: ', error);
    }
  }, [dispatch]);

  useEffect(() => {
    getFcmToken();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('[Remote Message] ', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, [getFcmToken]);

  return <React.Fragment />;
};
