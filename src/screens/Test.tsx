import { Text } from '@gluestack-ui/themed';
import Header from '~/components/Header';
import { MainLayout } from '~/components/Layout/MainLayout';

export const Test = () => {
  return (
    <MainLayout>
      <Header />
      <Text fontSize={'$md'} color="$primary900">
        HI! This is Test Text
      </Text>
    </MainLayout>
  );
};
