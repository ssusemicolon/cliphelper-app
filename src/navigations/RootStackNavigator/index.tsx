import { NavigatorScreenParams } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useConfigAuthAxios } from '~/features/auth/auth.config';
import { useTokenService } from '~/features/auth/auth.hooks';
import { useAppDispatch, useAppSelector } from '~/store';
import { authActions } from '~/store/slices/authSlice';
import { revealUserId } from '~/utils/revealUserId';
import {
  ArticleStackNavigator,
  ArticleStackParamList,
} from '../ArticleStackNavigator';
import { AuthStackNavigator } from '../AuthStackNavigator';
import {
  CollectionStackNavigator,
  CollectionStackParamList,
} from '../CollectionStackNavigator';
import { MainTabNavigator, MainTabParamList } from '../MainTabNavigator';
import { MyWebView } from '~/containers/MyWebView';

export type RootStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  Article: NavigatorScreenParams<ArticleStackParamList>;
  Collection: NavigatorScreenParams<CollectionStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  WebView: {
    uri: string;
  };
  Auth: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  const { isSigned } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { getToken } = useTokenService();
  const { axiosConfiguration } = useConfigAuthAxios();

  useEffect(() => {
    const checkToken = async () => {
      await axiosConfiguration();
      const { accessToken } = await getToken();
      console.log('check token: ', accessToken);
      dispatch(
        authActions.setSigned({
          isSigned: !!accessToken,
          userId: accessToken ? revealUserId(accessToken) : 0,
        }),
      );
    };
    checkToken();
  }, [axiosConfiguration, dispatch, getToken]);

  return (
    <Stack.Navigator
      id="App"
      screenOptions={{
        headerShown: false,
      }}
    >
      {isSigned ? (
        <>
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen name="Article" component={ArticleStackNavigator} />
          <Stack.Screen
            name="Collection"
            component={CollectionStackNavigator}
          />
          <Stack.Screen name="WebView" component={MyWebView} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};
