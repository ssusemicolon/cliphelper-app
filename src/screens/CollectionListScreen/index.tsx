import { HStack, Text } from '@gluestack-ui/themed';
import { BottomSheetModal, TouchableOpacity } from '@gorhom/bottom-sheet';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import CollectionList from '~/components/CollectionList';
import { RoundedPlusIcon } from '~/components/Icon/PlusIcon';
import SafeView from '~/components/SafeView';
import CollectionForm from '~/containers/CollectionForm';
import { useBookmarkList } from '~/features/bookmark/bookmark.hooks';
import { useCollectionList } from '~/features/collection/collection.hooks';
import { RootStackParamList } from '~/navigations/RootStackNavigator';

export const MyCollectionListScreen = () => {
  const { data } = useCollectionList();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedArticle, setSelectedArticle] = useState(0);

  // variables
  const snapPoints = useMemo(() => ['80%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    handlePresentModalPress();
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const onClick = (id: number) => {
    navigation.navigate('Collection', {
      screen: 'Detail',
      params: {
        id,
      },
    });
  };

  return (
    <SafeView>
      <TouchableOpacity activeOpacity={0.5} onPress={handlePresentModalPress}>
        <HStack
          alignItems="center"
          justifyContent="center"
          paddingVertical={10}
          gap={5}
        >
          <RoundedPlusIcon color="$primary900" />
          <Text color="$primary900">새 컬렉션 추가</Text>
        </HStack>
      </TouchableOpacity>
      <CollectionList collections={data} onClickItem={onClick} />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <SafeView bottom>
          <CollectionForm
            onSuccess={() => bottomSheetModalRef.current?.close()}
          />
        </SafeView>
      </BottomSheetModal>
    </SafeView>
  );
};

export const MyBookmarkListScreen = () => {
  const { data } = useBookmarkList();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const onClick = (id: number) => {
    navigation.navigate('Collection', {
      screen: 'Detail',
      params: {
        id,
      },
    });
  };

  return (
    <SafeView bottom>
      <CollectionList collections={data} onClickItem={onClick} />
    </SafeView>
  );
};
