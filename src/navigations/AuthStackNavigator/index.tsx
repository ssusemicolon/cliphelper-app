import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import SafeView from '~/components/SafeView';
import { SignInScreen } from '~/screens/SignInScreen';

export type AuthStackParamList = {
  SignIn: undefined;
};

export type AuthStackNavigationProp<T extends keyof AuthStackParamList> =
  NativeStackNavigationProp<AuthStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <SafeView top bottom>
      <Stack.Navigator
        id="Auth"
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SignIn'}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </SafeView>
  );
};
