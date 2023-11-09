import { HStack, VStack } from '@gluestack-ui/themed';
import ArticleList from '../ArticleList';
import CollectionItem from '../CollectionItem';

type CollectionDetailPropType = {
  data: CollectionDetail;
  onClickItem?: (id: number) => void;
};

const CollectionDetail = ({ data }: CollectionDetailPropType) => {
  const { articles, ...others } = data;

  console.log('others: ', others);

  return (
    <VStack flex={1}>
      <CollectionItem collection={others} />
      <ArticleList articles={articles} />
    </VStack>
  );
};

export default CollectionDetail;
