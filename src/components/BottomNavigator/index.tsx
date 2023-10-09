import { HStack, Icon } from '@gluestack-ui/themed';
import { BookmarkIcon } from '~/components/Icon/BookmarkIcon';
import { HomeIcon } from '~/components/Icon/HomeIcon';
import { RoundedPlusIcon } from '~/components/Icon/PlusIcon';
import { ProfileIcon } from '~/components/Icon/ProfileIcon';
import { SearchIcon } from '~/components/Icon/SearchIcon';

const BottomNavigator = () => {
  return (
    <HStack justifyContent="space-around">
      <Icon as={HomeIcon} color="black" size={'xl'} />
      <Icon as={SearchIcon} color="black" size={'xl'} />
      <Icon as={RoundedPlusIcon} color="black" size={'xl'} />
      <Icon as={BookmarkIcon} color="black" size={'xl'} />
      <Icon as={ProfileIcon} color="black" size={'xl'} />
    </HStack>
  );
};

export default BottomNavigator;
