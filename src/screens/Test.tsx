import { ButtonIcon } from '@gluestack-ui/themed';
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import { MainLayout } from '~/components/Layout/MainLayout';

export const Test = () => {
  return (
    <MainLayout>
      <Header
        right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
      />
    </MainLayout>
  );
};
