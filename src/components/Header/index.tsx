import { HStack, Heading, LinkIcon, Text } from '@gluestack-ui/themed';
import { ReactNode } from 'react';
import { LeftArrowIcon } from '../Icon/LeftArrowIcon';

type HeaderProps = {
  title?: string;
  back?: boolean;
  left?: ReactNode;
  right?: ReactNode;
};

const Header = (props: HeaderProps) => {
  const { title, back = false, left, right } = props;
  return (
    <HStack
      justifyContent="space-between"
      width={'$full'}
      paddingHorizontal={16}
    >
      <HStack alignItems="center" space={'md'}>
        {left}
        {back && <LeftArrowIcon size={'xl'} color="$primary900" />}
        {title ? (
          <Text
            fontSize={'$lg'}
            fontWeight="700"
            color="$primary900"
            alignItems="center"
          >
            {title}
          </Text>
        ) : (
          <HStack alignItems="center" space="xs">
            <Heading
              fontSize={'$3xl'}
              fontWeight="700"
              color="$primary900"
              alignItems="center"
            >
              {'Clip Helper'}
            </Heading>
            <LinkIcon color="$primary900" />
          </HStack>
        )}
      </HStack>
      <HStack alignItems="center">{right}</HStack>
    </HStack>
  );
};
export default Header;
