import { ButtonIcon } from '@gluestack-ui/themed';
import ErrorView from '~/components/ErrorView';
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import { MainLayout } from '~/components/Layout/MainLayout';
import { GrowingLoadingView } from '~/components/Loading/GrowingLoadingView';

export const Test = () => {
  return (
    <MainLayout>
      <Header
        right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
      />
      <GrowingLoadingView />
      <ErrorView />
    </MainLayout>
  );
};
