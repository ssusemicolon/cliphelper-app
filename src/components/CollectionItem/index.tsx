import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { EarthIcon } from '../Icon/EarthIcon';
import { HeartIcon } from '../Icon/HeartIcon';
import { LockIcon } from '../Icon/LockIcon';
import { UserProfile } from '../UserProfile';
import { memo } from 'react';

interface CollectionItemProp {
  collection: CollectionListItem;
  onClick?: (id: number) => void;
}

const CollectionItem = ({ collection, onClick }: CollectionItemProp) => {
  const {
    collectionId,
    title,
    description,
    user,
    public: isPublic,
  } = collection;
  const likeCount = 5;

  return (
    <VStack marginVertical={5} borderBottomWidth={1} borderColor="$grey300">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onClick?.(collectionId)}
      >
        {user && <UserProfile user={user} />}
        <HStack space="lg" padding={14}>
          {isPublic
            ? !user && <EarthIcon color="$primary900" size="xl" />
            : !user && <LockIcon color="$primary900" size="xl" />}
          <VStack flex={1} gap={10}>
            <HStack justifyContent="space-between">
              <Text fontWeight="700" fontSize={'$lg'}>
                {title}
              </Text>
              {isPublic && (
                <HStack gap={5} alignItems="center">
                  <HeartIcon color="$focus300" size="md" />
                  <Text>{likeCount}</Text>
                </HStack>
              )}
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

export default memo(CollectionItem);
