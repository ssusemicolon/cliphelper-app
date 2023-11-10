import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import SafeView from '~/components/SafeView';
import { CollectionDetailScreen } from '~/screens/CollectionDetailScreen';

export type CollectionStackParamList = {
  List: undefined;
  Detail: { id: number };
};

export type CollectionStackNavigationProp<
  T extends keyof CollectionStackParamList,
> = NativeStackNavigationProp<CollectionStackParamList, T>;

export type CollectionStackScreenProps<
  T extends keyof CollectionStackParamList,
> = NativeStackScreenProps<CollectionStackParamList, T>;

const Stack = createNativeStackNavigator<CollectionStackParamList>();

export const CollectionStackNavigator = () => {
  return (
    <SafeView bottom>
      <Stack.Navigator
        id="Collection"
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Detail'}
      >
        <Stack.Screen name="Detail" component={CollectionDetailScreen} />
      </Stack.Navigator>
    </SafeView>
  );
};
