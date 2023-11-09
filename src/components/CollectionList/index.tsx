import { FlatList } from 'react-native';
import styled from 'styled-components';
import CollectionItem from '../CollectionItem';

type CollectionListProp = {
  collections: CollectionListItem[];
};

const CollectionFlatList = styled(
  FlatList as new () => FlatList<CollectionListItem>,
)`
  padding: 0 10px;
`;

const CollectionList = ({ collections }: CollectionListProp) => {
  return (
    <CollectionFlatList
      data={collections}
      renderItem={({ item }) => <CollectionItem collection={item} />}
      keyExtractor={(item) => `${item.collectionId}`}
    />
  );
};

export default CollectionList;
