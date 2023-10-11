import { ButtonIcon } from '@gluestack-ui/themed';
import ArticleDetail from '~/components/ArticleDetail';
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import SafeView from '~/components/SafeView';
import article from './article-detail.json';

export const ArticleDetailScreen = () => {
  return (
    <SafeView top>
      <Header
        right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
      />
      <ArticleDetail {...article} />
    </SafeView>
  );
};
