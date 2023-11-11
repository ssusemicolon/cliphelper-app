import { Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CollectionList from '~/components/CollectionList';
import Header from '~/components/Header';
import SafeView from '~/components/SafeView';
import { usePopularCollectionList } from '~/features/collection/collection.hooks';
import { RootStackParamList } from '~/navigations/RootStackNavigator';

export const PopularCollectionListScreen = () => {
  const { data } = usePopularCollectionList();
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
      <Header back={false} />
      <CollectionList collections={data} onClickItem={onClick} />
    </SafeView>
  );
};
