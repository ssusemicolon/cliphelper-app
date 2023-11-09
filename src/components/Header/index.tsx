import { HStack, Heading, LinkIcon, Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';
import { RootStackParamList } from '~/navigations/RootStackNavigator';
import { LeftArrowIcon } from '../Icon/LeftArrowIcon';
import IconButton from '../IconButton';

type HeaderProps = {
  title?: string;
  back?: boolean;
  left?: ReactNode;
  right?: ReactNode;
  showTitle?: boolean;
};

const Header = (props: HeaderProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {
    title,
    back = navigation.canGoBack(),
    left,
    right,
    showTitle = true,
  } = props;

  return (
    <HStack
      justifyContent="space-between"
      width={'$full'}
      paddingHorizontal={16}
      height={'8%'}
    >
      <HStack alignItems="center" space={'md'}>
        {left}
        {back && (
          <IconButton
            icon={LeftArrowIcon}
            color="$primary900"
            onClick={() => navigation.goBack()}
          />
        )}
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
          showTitle && (
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
          )
        )}
      </HStack>
      <HStack alignItems="center">{right}</HStack>
    </HStack>
  );
};
export default Header;
