import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { BottomSheetModal, TouchableOpacity } from '@gorhom/bottom-sheet';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCallback, useMemo, useRef } from 'react';
import CollectionList from '~/components/CollectionList';
import ErrorView from '~/components/ErrorView';
import { RoundedPlusIcon } from '~/components/Icon/PlusIcon';
import { GrowingLoadingView } from '~/components/Loading/GrowingLoadingView';
import SafeView from '~/components/SafeView';
import CollectionForm from '~/containers/CollectionForm';
import { useCollectionList } from '~/features/collection/collection.hooks';
import { RootStackParamList } from '~/navigations/RootStackNavigator';

export const MyCollectionListScreen = () => {
  const { data, isLoading, error } = useCollectionList();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['80%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  if (isLoading) {
    return (
      <SafeView>
        <VStack justifyContent="center" alignItems="center" flex={1}>
          <GrowingLoadingView />
        </VStack>
      </SafeView>
    );
  }

  if (!data || error) {
    return (
      <SafeView>
        <VStack justifyContent="center" alignItems="center" flex={1}>
          <ErrorView />
        </VStack>
      </SafeView>
    );
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
      {data?.length > 0 ? (
        <CollectionList collections={data} onClickItem={onClick} />
      ) : (
        <VStack justifyContent="center" alignItems="center">
          <ErrorView
            message={
              '아직 만들어진 컬렉션이 없어요\n컬렉션을 만들고, 북마크를 관리해보세요!'
            }
            color="$focus200"
          />
        </VStack>
      )}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
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
