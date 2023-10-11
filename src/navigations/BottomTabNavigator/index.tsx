import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabBar from '~/components/BottomTabBar';
import ArticleFormScreen from '~/screens/ArticleFormScreen';
import { ArticleListScreen } from '~/screens/ArticleListScreen';
import { RootStackParamList } from '../RootStackNavigator';
import SafeView from '~/components/SafeView';

const Tab = createBottomTabNavigator<MainTabParamList>();

export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Form: undefined;
  Bookmark: undefined;
  Profile: undefined;
};

export type MainTabNavigationProp<T extends keyof MainTabParamList> =
  CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, T>,
    NativeStackNavigationProp<RootStackParamList>
  >;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

export const MainTabNavigator = () => {
  return (
    <SafeView top bottom>
      <Tab.Navigator
        id="Main"
        initialRouteName="Home"
        tabBar={BottomTabBar}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
          },
        }}
      >
        <Tab.Screen name="Home" component={ArticleListScreen} />
        <Tab.Screen name="Search" component={ArticleListScreen} />
        <Tab.Screen name="Form" component={ArticleFormScreen} />
        <Tab.Screen name="Bookmark" component={ArticleListScreen} />
        <Tab.Screen name="Profile" component={ArticleListScreen} />
      </Tab.Navigator>
    </SafeView>
  );
};
