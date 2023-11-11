import { NavigatorScreenParams } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {
  ArticleStackNavigator,
  ArticleStackParamList,
} from '../ArticleStackNavigator';
import { AuthStackNavigator } from '../AuthStackNavigator';
import { MainTabNavigator, MainTabParamList } from '../MainTabNavigator';
import {
  CollectionStackNavigator,
  CollectionStackParamList,
} from '../CollectionStackNavigator';

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
  return (
    <Stack.Navigator
      id="App"
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Main'}
    >
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
      <Stack.Screen name="Article" component={ArticleStackNavigator} />
      <Stack.Screen name="Collection" component={CollectionStackNavigator} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
    </Stack.Navigator>
  );
};
