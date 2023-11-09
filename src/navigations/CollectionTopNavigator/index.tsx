import { ButtonIcon } from '@gluestack-ui/themed';
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
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import SafeView from '~/components/SafeView';
import {
  MyBookmarkListScreen,
  MyCollectionListScreen,
} from '~/screens/CollectionListScreen';
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
      <Header
        right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
      />
      <Tab.Navigator id="BookmarkTab">
        <Tab.Screen name="My" component={MyCollectionListScreen} />
        <Tab.Screen name="Bookmark" component={MyBookmarkListScreen} />
      </Tab.Navigator>
    </SafeView>
  );
};
