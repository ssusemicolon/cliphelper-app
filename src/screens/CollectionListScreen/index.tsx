import { ButtonIcon } from '@gluestack-ui/themed';
import CollectionList from '~/components/CollectionList';
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import SafeView from '~/components/SafeView';
import demo from './demo.json';

export const CollectionListScreen = () => {
  const { collections } = JSON.parse(JSON.stringify(demo));
  return (
    <SafeView>
      <Header
        right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
      />
      <CollectionList collections={collections} />
    </SafeView>
  );
};
