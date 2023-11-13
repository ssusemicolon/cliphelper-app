import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import SafeView from '~/components/SafeView';
import { ArticleDetailScreen } from '~/screens/ArticleDetailScreen';
import { ArticleListScreen } from '~/screens/ArticleListScreen';

export type ArticleStackParamList = {
  List: undefined;
  Detail: { id: number };
};

export type ArticleStackNavigationProp<T extends keyof ArticleStackParamList> =
  NativeStackNavigationProp<ArticleStackParamList, T>;

export type ArticleStackScreenProps<T extends keyof ArticleStackParamList> =
  NativeStackScreenProps<ArticleStackParamList, T>;

const Stack = createNativeStackNavigator<ArticleStackParamList>();

export const ArticleStackNavigator = () => {
  return (
    <SafeView bottom top>
      <Stack.Navigator
        id="Article"
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'List'}
      >
        <Stack.Screen name="List" component={ArticleListScreen} />
        <Stack.Screen name="Detail" component={ArticleDetailScreen} />
      </Stack.Navigator>
    </SafeView>
  );
};
