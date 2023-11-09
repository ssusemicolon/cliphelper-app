import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import { RootStackParamList } from '~/navigations/RootStackNavigator';
import ArticleItem from '../ArticleItem';

type ArticleListProp = {
  articles: ArticleListItem[];
};

const ArticleFlatList = styled(FlatList as new () => FlatList<ArticleListItem>)`
  padding: 0 10px;
`;

const ArticleList = ({ articles }: ArticleListProp) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ArticleFlatList
      data={articles}
      renderItem={({ item }) => (
        <ArticleItem
          article={item}
          onClick={() =>
            navigation.navigate('Article', {
              screen: 'Detail',
              params: {
                id: item.articleId,
              },
            })
          }
        />
      )}
      keyExtractor={(item) => `${item.articleId}`}
    />
  );
};

export default ArticleList;
