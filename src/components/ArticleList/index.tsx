import { FlatList } from 'react-native';
import styled from 'styled-components';
import ArticleItem from '../ArticleItem';

interface ArticleListProp extends ArticleList {}

const ArticleFlatList = styled(FlatList as new () => FlatList<ArticleListItem>)`
  padding: 0 10px;
  margin-bottom: 20px;
`;

const ArticleList = ({ articles }: ArticleListProp) => {
  return (
    <ArticleFlatList
      data={articles}
      renderItem={({ item }) => <ArticleItem article={item} />}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

export default ArticleList;
