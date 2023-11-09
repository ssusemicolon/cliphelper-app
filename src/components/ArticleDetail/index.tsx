import { HStack, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { useAppDispatch } from '~/store';
import { articleFormActions } from '~/store/slices/articleForm';
import { fromNow } from '~/utils/date-formatter';
import CTAButton from '../CTAButton';
import ArticleThumb from '../Image/ArticleThumb';
import Tags from '../Tags';
import { ArticleTextArea } from './ArticleTextArea';

interface ArticleDetailProp extends ArticleDetail {
  onDelete?: () => void;
  onLink?: () => void;
  onEdit?: () => void;
  editable?: boolean;
}

const ArticleDetail = (prop: ArticleDetailProp) => {
  const {
    url,
    title,
    tags,
    memo,
    createdAt,
    recentAccessTime,
    thumbnail,
    onDelete,
    onLink,
    editable,
  } = prop;

  const dispatch = useAppDispatch();

  const onChangeMemo = (t: string) => {
    dispatch(articleFormActions.changeForm({ key: 'memo', value: t }));
  };

  const onChangeTags = (tagList: string[]) => {
    dispatch(articleFormActions.changeForm({ key: 'tags', value: tagList }));
  };

  return (
    <VStack justifyContent="space-between" paddingHorizontal={12} flex={1}>
      <ScrollView>
        <VStack paddingVertical={5} gap={18}>
          <HStack justifyContent="flex-end">
            <Text color="$grey500" size={'xs'}>
              {fromNow(createdAt)} 만들어짐, {fromNow(recentAccessTime)}에 읽음
            </Text>
          </HStack>

          <HStack>{thumbnail && <ArticleThumb src={thumbnail} />}</HStack>

          <HStack space="lg" paddingHorizontal={5}>
            <VStack space="xs">
              <Text fontWeight="700" fontSize={'$lg'}>
                {title}
              </Text>
            </VStack>
          </HStack>

          <Tags tags={tags} edit={editable} setTags={onChangeTags} />

          <VStack>
            <HStack justifyContent="space-between" paddingHorizontal={10}>
              <Text fontWeight="700" fontSize={'$lg'}>
                메모
              </Text>
            </HStack>
            <ArticleTextArea
              editable={editable}
              multiline
              numberOfLines={10}
              maxLength={500}
              value={memo}
              onChangeText={onChangeMemo}
              placeholder="공부한 내용을 메모해보세요.."
            />
          </VStack>
        </VStack>
      </ScrollView>

      <HStack justifyContent="center" gap={10}>
        <CTAButton onClick={onDelete} bgColor="$focus300">
          삭제하기
        </CTAButton>
        {url && <CTAButton onClick={onLink}>바로가기</CTAButton>}
      </HStack>
    </VStack>
  );
};

export default ArticleDetail;
