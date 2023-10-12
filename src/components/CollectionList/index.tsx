import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import { RootStackParamList } from '~/navigations/RootStackNavigator';
import CollectionItem from '../CollectionItem';

interface CollectionListProp extends CollectionList {}

const CollectionFlatList = styled(
  FlatList as new () => FlatList<CollectionListItem>,
)`
  padding: 0 10px;
`;

const CollectionList = ({ collections }: CollectionListProp) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <CollectionFlatList
      data={collections}
      renderItem={({ item }) => <CollectionItem collection={item} />}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

export default CollectionList;
