import { Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CollectionList from '~/components/CollectionList';
import SafeView from '~/components/SafeView';
import { useBookmarkList } from '~/features/bookmark/bookmark.hooks';
import { RootStackParamList } from '~/navigations/RootStackNavigator';

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
