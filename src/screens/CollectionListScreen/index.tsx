import CollectionList from '~/components/CollectionList';
import SafeView from '~/components/SafeView';
import demo from './demo.json';

export const CollectionListScreen = () => {
  const { collections } = JSON.parse(JSON.stringify(demo));
  return (
    <SafeView>
      <CollectionList collections={collections} />
    </SafeView>
  );
};
