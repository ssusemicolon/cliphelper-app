import { Text } from '@gluestack-ui/themed';
import { MainLayout } from '~/components/Layout/MainLayout';

export const Test = () => {
  return (
    <MainLayout>
      <Text fontSize={'$md'} color="$primary900">
        HI! This is Test Text
      </Text>
    </MainLayout>
  );
};
