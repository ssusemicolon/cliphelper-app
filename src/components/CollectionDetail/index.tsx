import { Box, VStack } from '@gluestack-ui/themed';
import ArticleList from '../ArticleList';
import CollectionItem from '../CollectionItem';

type CollectionDetailPropType = {
  data: CollectionDetail;
  onClickItem?: (id: number) => void;
  editable?: boolean;
  onChange?: ({ title, description, isPublic }: CollectionModifyForm) => void;
};

const CollectionDetail = ({
  data,
  onChange,
  editable,
}: CollectionDetailPropType) => {
  const { articles, ...others } = data;

  return (
    <VStack flex={1}>
      <Box paddingTop={10} paddingHorizontal={10}>
        <CollectionItem
          collection={others}
          onChange={onChange}
          editable={editable}
        />
      </Box>
      <ArticleList articles={articles} />
    </VStack>
  );
};

export default CollectionDetail;
