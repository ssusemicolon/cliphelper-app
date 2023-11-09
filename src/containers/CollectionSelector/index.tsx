import { Box, Text, VStack } from '@gluestack-ui/themed';
import SimpleCollectionList from '~/components/SimpleCollectionList';
import {
  useArticleCollectionMutation,
  useArticleCollections,
  useArticleDetail,
} from '~/features/article/article.hooks';
import { useCollectionList } from '~/features/collection/collection.hooks';

type CollectionSelectorProps = {
  articleId: number;
};

export const CollectionSelector = ({ articleId }: CollectionSelectorProps) => {
  const { data } = useCollectionList();
  const { data: article } = useArticleDetail(articleId);
  const { data: articleCollections } = useArticleCollections(articleId);
  const { mutate: editCollections } = useArticleCollectionMutation(articleId);

  console.log('articleId: ', articleId);

  if (!data || !article || !articleCollections) {
    return <Text>Loading...</Text>;
  }

  const onCheckItem = (collectionId: number, isChecked: boolean) => {
    console.log('on check Item: ', collectionId, ' ', isChecked);
    const collections = isChecked
      ? [collectionId, ...articleCollections]
      : articleCollections.filter((ac) => ac !== collectionId);

    editCollections(
      { id: articleId, collections },
      {
        onSuccess: () => {
          console.log('success add to list');
        },
      },
    );
  };

  return (
    <Box flex={1}>
      <VStack paddingHorizontal={10} paddingBottom={10}>
        <VStack>
          <Text fontWeight="700" isTruncated>
            "{article.title}"
          </Text>
          <Text fontWeight="700">아티클을 컬렉션 목록에 추가</Text>
        </VStack>
      </VStack>
      <SimpleCollectionList
        onCheckItem={onCheckItem}
        articleCollections={articleCollections}
        collections={data}
      />
    </Box>
  );
};
