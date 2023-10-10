import { Box, ButtonIcon, HStack, Icon } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { CrossIcon } from '../Icon/CrossIcon';
import { RoundedPlusIcon } from '../Icon/PlusIcon';
import RoundLabel from '../RoundLabel';

interface TagProps {
  tags: TagItem[];
  edit?: boolean;
}

const CrossButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <TouchableOpacity onPress={() => onClick?.()}>
      <Box
        alignItems="center"
        justifyContent="center"
        paddingRight={5}
        borderLeftColor="$primary900"
      >
        <ButtonIcon color="$primary900" size="xs" as={CrossIcon} />
      </Box>
    </TouchableOpacity>
  );
};

const AppendTagButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onClick?.()}>
      <Box paddingTop={3} paddingLeft={5}>
        <Icon as={RoundedPlusIcon} color="$secondary900" size={'xl'} />
      </Box>
    </TouchableOpacity>
  );
};

const Tags = ({ tags, edit }: TagProps) => {
  return (
    <HStack space="sm" flexWrap="wrap">
      {tags.map(({ id, title }) => (
        <RoundLabel
          key={id}
          right={edit && <CrossButton />}
        >{`#${title}`}</RoundLabel>
      ))}
      {edit && <AppendTagButton />}
    </HStack>
  );
};

export default Tags;
