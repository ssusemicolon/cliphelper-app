import { ButtonIcon } from '@gluestack-ui/themed';
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';

export const Test = () => {
  return (
    <Header
      right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
    />
  );
};
