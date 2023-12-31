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
import SafeView from '~/components/SafeView';
import ArticleFormScreen from '~/screens/ArticleFormScreen';
import { ArticleListScreen } from '~/screens/ArticleListScreen';
import { PopularCollectionListScreen } from '~/screens/CollectionListScreen/PopularCollectionListScreen';
import { UserProfileScreen } from '~/screens/UserProfileScreen';
import { CollectionTopTabNavigator } from '../CollectionTopNavigator';
import { RootStackParamList } from '../RootStackNavigator';

const Tab = createBottomTabNavigator<MainTabParamList>();

export type MainTabParamList = {
  Test: undefined;
  Home: undefined;
  Search: undefined;
  Form: undefined;
  Collections: undefined;
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
        tabBar={BottomTabBar}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
          },
        }}
      >
        <Tab.Screen name="Home" component={ArticleListScreen} />
        <Tab.Screen name="Search" component={PopularCollectionListScreen} />
        <Tab.Screen name="Form" component={ArticleFormScreen} />
        <Tab.Screen name="Collections" component={CollectionTopTabNavigator} />
        <Tab.Screen name="Profile" component={UserProfileScreen} />
      </Tab.Navigator>
    </SafeView>
  );
};
