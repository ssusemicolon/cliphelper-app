import { NavigatorScreenParams } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  useConfigAuthAxios,
  useTokenService,
} from '~/features/auth/auth.hooks';
import { useAppSelector } from '~/store';
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

export type RootStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  Article: NavigatorScreenParams<ArticleStackParamList>;
  Collection: NavigatorScreenParams<CollectionStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  Auth: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  const { isSigned } = useAppSelector((state) => state.auth);

  const configAxios = useConfigAuthAxios();
  const { getToken } = useTokenService();

  useEffect(() => {
    const checkToken = async () => {
      const { accessToken } = await getToken();
      await configAxios();
      console.log('check token: ', accessToken);
    };
    checkToken();
  }, [configAxios, getToken, isSigned]);

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
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};
