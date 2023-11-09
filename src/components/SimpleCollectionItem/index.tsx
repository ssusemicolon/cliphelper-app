import {
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

interface CollectionItemProp {
  collection: CollectionListItem;
  articleCollections?: number[];
  onClick?: (id: number) => void;
  onCheck?: (id: number, checked: boolean) => void;
}

const SimpleCollectionItem = ({
  collection,
  articleCollections = [],
  onClick,
  onCheck,
}: CollectionItemProp) => {
  const { collectionId, title, description } = collection;
  const selected = !!articleCollections?.filter((a) => a === collectionId)[0];

  return (
    <VStack marginVertical={5} borderBottomWidth={1} borderColor="$grey300">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onClick?.(collectionId)}
      >
        <HStack space="lg" padding={14}>
          <VStack flex={1} gap={10}>
            <HStack justifyContent="space-between">
              <Text fontWeight="700" fontSize={'$lg'}>
                {title}
              </Text>
              <Checkbox
                value="is"
                size="md"
                isInvalid={false}
                isDisabled={false}
                defaultIsChecked={selected}
                onChange={(checked) => onCheck?.(collectionId, checked)}
                aria-label="add article to collections"
              >
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
              </Checkbox>
            </HStack>
            <Text fontSize={'$sm'} flexWrap="wrap">
              {description}
            </Text>
          </VStack>
        </HStack>
      </TouchableOpacity>
    </VStack>
  );
};

export default memo(SimpleCollectionItem);
