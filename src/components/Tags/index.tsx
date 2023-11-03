import { Box, ButtonIcon, HStack, Icon, VStack } from '@gluestack-ui/themed';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { CrossIcon } from '../Icon/CrossIcon';
import { RoundedPlusIcon } from '../Icon/PlusIcon';
import RoundLabel from '../RoundLabel';
import { TagInput } from './TagInput';

interface TagProps {
  tags: string[];
  edit?: boolean;
  setTags?: (args: string[]) => void;
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

const Tags = ({ tags, edit, setTags }: TagProps) => {
  const [editTag, setEditTag] = useState<string>('');
  const [step, setStep] = useState(0);

  const onAppendTag = () => {
    setTags?.([...tags, editTag]);
    setEditTag('');
  };

  const onRemoveTag = (title: string) => {
    setTags?.(tags.filter((t) => t !== title));
  };

  return (
    <VStack>
      <HStack space="sm" flexWrap="wrap">
        {tags.map((title) => (
          <RoundLabel
            key={title}
            right={edit && <CrossButton onClick={() => onRemoveTag(title)} />}
          >{`#${title}`}</RoundLabel>
        ))}
      </HStack>
      {edit && step === 0 && (
        <Box marginTop={10}>
          <AppendTagButton onClick={() => setStep(1)} />
        </Box>
      )}
      {edit && step === 1 && (
        <HStack
          width={150}
          marginTop={10}
          flex={1}
          alignItems="center"
          borderColor="$primary900"
          borderRadius={8}
          borderWidth={1}
        >
          <TagInput value={editTag} onChangeText={(t) => setEditTag(t)} />
          <TouchableOpacity onPress={onAppendTag}>
            <ButtonIcon as={RoundedPlusIcon} size="md" color="$primary900" />
          </TouchableOpacity>
        </HStack>
      )}
    </VStack>
  );
};

export default Tags;
