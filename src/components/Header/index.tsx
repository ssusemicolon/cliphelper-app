import { HStack, LinkIcon, Text } from '@gluestack-ui/themed';
import { ReactNode } from 'react';
import { LeftArrowIcon } from '../Icon/LeftArrowIcon';

type HeaderProps = {
  title?: string;
  back?: boolean;
  left?: ReactNode;
  right?: ReactNode;
};

const Header = (props: HeaderProps) => {
  const { title = 'Clip Helper', back = false, left, right } = props;
  return (
    <HStack
      justifyContent="space-between"
      width={'$full'}
      paddingHorizontal={10}
    >
      <HStack alignItems="center" space={'md'}>
        {left}
        {back && <LeftArrowIcon size={'xl'} color="$primary900" />}
        <HStack alignItems="center" space="xs">
          <Text
            fontSize={'$lg'}
            paddingTop={15}
            fontWeight="700"
            color="$primary900"
            alignItems="center"
          >
            {title}
          </Text>
          <LinkIcon color="$primary900" />
        </HStack>
      </HStack>
      <HStack>{right}</HStack>
    </HStack>
  );
};
export default Header;
