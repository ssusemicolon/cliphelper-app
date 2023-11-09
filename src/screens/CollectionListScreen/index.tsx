import { Text } from '@gluestack-ui/themed';
import CollectionList from '~/components/CollectionList';
import SafeView from '~/components/SafeView';
import { useCollectionList } from '~/features/collection/collection.hooks';

export const MyCollectionListScreen = () => {
  const { data } = useCollectionList();

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeView>
      <CollectionList collections={data} />
    </SafeView>
  );
};

export const MyBookmarkListScreen = () => {
  const { data } = useCollectionList();

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeView>
      <CollectionList collections={data} />
    </SafeView>
  );
};
