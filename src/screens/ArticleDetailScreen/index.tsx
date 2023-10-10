import { ButtonIcon } from '@gluestack-ui/themed';
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import { MainLayout } from '~/components/Layout/MainLayout';
import article from './article-detail.json';
import ArticleDetail from '~/components/ArticleDetail';

export const ArticleDetailScreen = () => {
  return (
    <MainLayout>
      <Header
        right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
      />
      <ArticleDetail {...article} />
    </MainLayout>
  );
};
