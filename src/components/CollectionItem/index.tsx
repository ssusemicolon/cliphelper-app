import { HStack, Image, Text, VStack } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { EarthIcon } from '../Icon/EarthIcon';
import { HeartIcon } from '../Icon/HeartIcon';
import { LockIcon } from '../Icon/LockIcon';

interface CollectionItemProp {
  collection: CollectionListItem;
  onClick?: () => void;
}

const CollectionItem = ({ collection, onClick }: CollectionItemProp) => {
  const { title, description, user, public: isPublic } = collection;
  const likeCount = 5;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onClick?.()}>
      <VStack
        marginVertical={5}
        flex={1}
        borderBottomWidth={1}
        borderColor="$grey300"
      >
        {user && (
          <HStack
            justifyContent="flex-start"
            alignItems="center"
            gap={10}
            padding={5}
          >
            <Image
              width={35}
              height={35}
              borderRadius={50}
              source={{ uri: user.thumb }}
              alt="user thumbnail image"
            />
            <Text fontWeight="600" fontSize={'$md'}>
              {user.username}
            </Text>
          </HStack>
        )}
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
      </VStack>
    </TouchableOpacity>
  );
};

export default CollectionItem;
