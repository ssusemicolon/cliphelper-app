import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { fromNow } from '~/utils/date-formatter';
import ArticleThumb from '../Image/ArticleThumb';
import Tags from '../Tags';

interface ArticleItemProp {
  article: ArticleListItem;
}

const ArticleItem = ({ article }: ArticleItemProp) => {
  const { thumb, title, tags, content, createdAt } = article;
  return (
    <TouchableOpacity activeOpacity={0.8}>
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
        <HStack>{thumb && <ArticleThumb src={thumb} />}</HStack>
        <HStack space="lg" paddingHorizontal={5}>
          <VStack space="xs">
            <Text fontWeight="700" fontSize={'$lg'}>
              {title}
            </Text>

            <Text>
              {content.length > 50 ? `${content.substring(0, 50)}...` : content}
            </Text>
          </VStack>
        </HStack>
        <Tags tags={tags} />
      </VStack>
    </TouchableOpacity>
  );
};

export default ArticleItem;
