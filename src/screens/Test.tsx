import { HStack, Text } from '@gluestack-ui/themed';
import Header from '~/components/Header';
import { MainLayout } from '~/components/Layout/MainLayout';
import RoundLabel from '~/components/RoundLabel';

export const Test = () => {
  return (
    <MainLayout>
      <Header />
      <Text fontSize={'$md'} color="$primary900">
        HI! This is Test Text
      </Text>
      <HStack justifyContent="space-around">
        <RoundLabel>#백엔드</RoundLabel>
        <RoundLabel>#프론트</RoundLabel>
      </HStack>
    </MainLayout>
  );
};
