import { ButtonIcon, Text } from '@gluestack-ui/themed';
import ArticleList from '~/components/ArticleList';
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import SafeView from '~/components/SafeView';
import { useArticleList } from '~/features/article/article.hooks';

export const ArticleListScreen = () => {
  const { data } = useArticleList();

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeView>
      <Header
        right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
      />
      <ArticleList articles={data} />
    </SafeView>
  );
};
