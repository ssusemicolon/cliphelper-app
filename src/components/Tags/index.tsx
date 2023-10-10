import { HStack } from '@gluestack-ui/themed';
import RoundLabel from '../RoundLabel';

interface TagProps {
  tags: TagItem[];
}

const Tags = ({ tags }: TagProps) => {
  return (
    <HStack space="sm">
      {tags.map(({ id, title }) => (
        <RoundLabel key={id}>{`#${title}`}</RoundLabel>
      ))}
    </HStack>
  );
};

export default Tags;
