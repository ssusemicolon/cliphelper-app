import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import SafeView from '~/components/SafeView';
import { MyBookmarkListScreen } from '~/screens/CollectionListScreen/MyBookmartListScreen';
import { MyCollectionListScreen } from '~/screens/CollectionListScreen/MyCollectionListScreen';
import { RootStackParamList } from '../RootStackNavigator';

export type CollectionTopTabParamList = {
  My: undefined;
  Bookmark: undefined;
};

const Tab = createMaterialTopTabNavigator<CollectionTopTabParamList>();

export type CollectionTopTabNavigationProp<
  T extends keyof CollectionTopTabParamList,
> = CompositeNavigationProp<
  BottomTabNavigationProp<CollectionTopTabParamList, T>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type CollectionTopTabScreenProps<
  T extends keyof CollectionTopTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<CollectionTopTabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

export const CollectionTopTabNavigator = () => {
  return (
    <SafeView>
      <Tab.Navigator id="BookmarkTab">
        <Tab.Screen name="My" component={MyCollectionListScreen} />
        <Tab.Screen name="Bookmark" component={MyBookmarkListScreen} />
      </Tab.Navigator>
    </SafeView>
  );
};
