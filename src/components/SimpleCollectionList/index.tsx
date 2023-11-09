import { FlatList } from 'react-native';
import styled from 'styled-components';
import SimpleCollectionItem from '../SimpleCollectionItem';

type CollectionListProp = {
  collections: CollectionListItem[];
  articleCollections?: number[];
  onCheckItem?: (id: number, checked: boolean) => void;
  onClickItem?: (id: number) => void;
};

const CollectionFlatList = styled(
  FlatList as new () => FlatList<CollectionListItem>,
)`
  padding: 0 10px;
  flex: 1;
`;

const SimpleCollectionList = ({
  collections,
  articleCollections = [],
  onCheckItem,
}: CollectionListProp) => {
  return (
    <CollectionFlatList
      data={collections}
      renderItem={({ item }) => (
        <SimpleCollectionItem
          collection={item}
          articleCollections={articleCollections}
          onCheck={onCheckItem}
        />
      )}
      keyExtractor={(item) => `${item.collectionId}`}
    />
  );
};

export default SimpleCollectionList;
