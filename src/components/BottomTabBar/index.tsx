import { HStack } from '@gluestack-ui/themed';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BookmarkIcon } from '~/components/Icon/BookmarkIcon';
import { HomeIcon } from '~/components/Icon/HomeIcon';
import { RoundedPlusIcon } from '~/components/Icon/PlusIcon';
import { ProfileIcon } from '~/components/Icon/ProfileIcon';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import IconButton from '../IconButton';

type TabProps = {
  icon: any;
  active?: boolean;
  onClick?: () => void;
};

const Tab = ({ icon, active, onClick }: TabProps) => {
  return (
    <IconButton
      icon={icon}
      onClick={onClick}
      color={active ? '$primary900' : '$grey900'}
    />
  );
};

const BottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { index } = state;
  return (
    <HStack
      justifyContent="space-around"
      bgColor="$grey100"
      paddingVertical={'$1'}
    >
      <Tab
        onClick={() => navigation.navigate('Home')}
        icon={HomeIcon}
        active={index === 0}
      />
      <Tab
        onClick={() => navigation.navigate('Search')}
        icon={SearchIcon}
        active={index === 1}
      />
      <Tab
        onClick={() => navigation.navigate('Form')}
        icon={RoundedPlusIcon}
        active={index === 2}
      />
      <Tab
        onClick={() => navigation.navigate('Collections')}
        icon={BookmarkIcon}
        active={index === 3}
      />
      <Tab
        onClick={() => navigation.navigate('Profile')}
        icon={ProfileIcon}
        active={index === 4}
      />
    </HStack>
  );
};

export default BottomTabBar;

/**
 * 


 */
