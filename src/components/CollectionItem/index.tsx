import { HStack, Switch, Text, VStack } from '@gluestack-ui/themed';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  useBookmarkMutation,
  useUndoBookmarkMutation,
} from '~/features/bookmark/bookmark.hooks';
import { ArticleTextArea } from '../ArticleDetail/ArticleTextArea';
import { BookmarkIcon, FilledBookmarkIcon } from '../Icon/BookmarkIcon';
import { EarthIcon } from '../Icon/EarthIcon';
import { LockIcon } from '../Icon/LockIcon';
import { UserProfile } from '../UserProfile';

interface CollectionItemProp {
  collection: CollectionListItem;
  onClick?: (id: number) => void;
  onChange?: ({ title, description, isPublic }: CollectionModifyForm) => void;
  editable?: boolean;
}

const CollectionItem = ({
  collection,
  editable,
  onClick,
  onChange,
}: CollectionItemProp) => {
  const { collectionId, title, description, user, isPublic, isBookmarked } =
    collection;

  const { mutate: doBookmark } = useBookmarkMutation(collectionId);
  const { mutate: undoBookmark } = useUndoBookmarkMutation(collectionId);

  const handlePress = () => {
    if (isBookmarked) {
      undoBookmark(collectionId);
      return;
    }
    doBookmark(collectionId);
  };

  return (
    <HStack
      justifyContent={'space-between'}
      marginVertical={5}
      borderBottomWidth={1}
      borderColor="$grey300"
    >
      <TouchableOpacity
        disabled={!onClick}
        activeOpacity={0.8}
        onPress={() => onClick?.(collectionId)}
      >
        <VStack minWidth={'80%'}>
          {user && <UserProfile user={user} />}
          <HStack space="lg" paddingHorizontal={10} paddingVertical={5}>
            <VStack flex={1} gap={10}>
              <HStack justifyContent="space-between">
                {editable ? (
                  <VStack flex={1}>
                    <Text>제목</Text>
                    <ArticleTextArea
                      editable={editable}
                      maxLength={100}
                      onChangeText={(t) => {
                        onChange?.({ description, isPublic, title: t });
                      }}
                      value={title}
                    />
                  </VStack>
                ) : (
                  <HStack justifyContent="center" gap={10}>
                    {isPublic ? (
                      <EarthIcon color="$primary900" size="xl" />
                    ) : (
                      <LockIcon color="$primary900" size="xl" />
                    )}
                    <Text fontWeight="700" fontSize={'$lg'}>
                      {title}
                    </Text>
                  </HStack>
                )}
              </HStack>

              {editable ? (
                <VStack>
                  <Text>설명</Text>
                  <ArticleTextArea
                    editable={editable}
                    maxLength={50}
                    onChangeText={(t) => {
                      onChange?.({ description: t, isPublic, title });
                    }}
                    value={description}
                  />
                </VStack>
              ) : (
                <Text fontSize={'$sm'} flexWrap="wrap">
                  {description}
                </Text>
              )}

              {editable && (
                <VStack>
                  <Text>공개</Text>
                  <Switch
                    size="sm"
                    trackColor={{ false: '$grey500', true: '$secondary900' }}
                    defaultValue={isPublic}
                    onValueChange={(selected) =>
                      onChange?.({ description, isPublic: selected, title })
                    }
                  />
                </VStack>
              )}
            </VStack>
          </HStack>
        </VStack>
      </TouchableOpacity>
      {isPublic && !editable && (
        <HStack gap={5} alignItems="center">
          <TouchableOpacity onPress={handlePress}>
            {isBookmarked ? (
              <FilledBookmarkIcon color="$primary900" size="xl" />
            ) : (
              <BookmarkIcon color="$primary900" size="xl" />
            )}
          </TouchableOpacity>
        </HStack>
      )}
    </HStack>
  );
};

export default memo(CollectionItem);
