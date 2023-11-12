import { VStack } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CollectionList from '~/components/CollectionList';
import ErrorView from '~/components/ErrorView';
import { GrowingLoadingView } from '~/components/Loading/GrowingLoadingView';
import SafeView from '~/components/SafeView';
import { useBookmarkList } from '~/features/bookmark/bookmark.hooks';
import { RootStackParamList } from '~/navigations/RootStackNavigator';

export const MyBookmarkListScreen = () => {
  const { data, isLoading, error } = useBookmarkList();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
    <SafeView bottom>
      {data?.length > 0 ? (
        <CollectionList collections={data} onClickItem={onClick} />
      ) : (
        <VStack justifyContent="center" alignItems="center" flex={1}>
          <ErrorView
            message={'아직 북마크가 없네요\n인기 있는 컬렉션을 북마크해보세요!'}
            color="$focus200"
          />
        </VStack>
      )}
    </SafeView>
  );
};
