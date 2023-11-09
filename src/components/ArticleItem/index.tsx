import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { fromNow } from '~/utils/date-formatter';
import ArticleThumb from '../Image/ArticleThumb';
import Tags from '../Tags';

interface ArticleItemProp {
  article: ArticleListItem;
  onClick?: () => void;
}

const ArticleItem = ({ article, onClick }: ArticleItemProp) => {
  const { thumbnail, title, tags, memo, createdAt } = article;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onClick?.()}>
      <VStack
        justifyContent="center"
        space="md"
        paddingVertical={5}
        shadowColor="$grey500"
        shadowOffset={{ width: 200, height: 200 }}
      >
        <HStack justifyContent="flex-end">
          <Text color="$grey500" size={'sm'}>
            {fromNow(createdAt)}
          </Text>
        </HStack>
        <HStack>{thumbnail && <ArticleThumb src={thumbnail} />}</HStack>
        <HStack space="lg" paddingHorizontal={5}>
          <VStack space="xs">
            <Text fontWeight="700" fontSize={'$lg'}>
              {title}
            </Text>

            {memo && (
              <Text>
                {memo.length > 50 ? `${memo.substring(0, 50)}...` : memo}
              </Text>
            )}
          </VStack>
        </HStack>
        <Tags tags={tags} />
      </VStack>
    </TouchableOpacity>
  );
};

export default ArticleItem;
