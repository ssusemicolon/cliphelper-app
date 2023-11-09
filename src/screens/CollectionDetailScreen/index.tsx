import { Text } from '@gluestack-ui/themed';
import CollectionDetail from '~/components/CollectionDetail';
import Header from '~/components/Header';
import SafeView from '~/components/SafeView';
import { useCollectionDetail } from '~/features/collection/collection.hooks';
import { CollectionStackScreenProps } from '~/navigations/CollectionStackNavigator';

export const CollectionDetailScreen = ({
  route,
}: CollectionStackScreenProps<'Detail'>) => {
  const { id } = route.params;
  const { data } = useCollectionDetail(id);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeView top>
      <Header />
      <CollectionDetail data={data} />
    </SafeView>
  );
};
