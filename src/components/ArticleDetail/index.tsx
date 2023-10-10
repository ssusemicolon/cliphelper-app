import { HStack, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { useState } from 'react';
import { fromNow } from '~/utils/date-formatter';
import ArticleThumb from '../Image/ArticleThumb';
import Tags from '../Tags';
import { ArticleTextArea } from './ArticleTextArea';
import { CTAContainer } from './CTAContainer';

interface ArticleDetailProp extends ArticleDetail {}

const ArticleDetail = (prop: ArticleDetailProp) => {
  const { thumb, title, tags, content, createdAt } = prop;
  const [memoContent, setMemoContent] = useState<string>(content);

  return (
    <VStack justifyContent="space-between" paddingHorizontal={12} flex={1}>
      <ScrollView>
        <VStack paddingVertical={5} gap={18}>
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
            </VStack>
          </HStack>
          <Tags tags={tags} edit />

          <VStack>
            <HStack>
              <Text fontWeight="700" fontSize={'$lg'}>
                메모
              </Text>
            </HStack>
            <ArticleTextArea
              editable
              multiline
              numberOfLines={10}
              maxLength={500}
              value={memoContent}
              onChangeText={(t) => setMemoContent(t)}
              placeholder="공부한 내용을 메모해보세요.."
            />
          </VStack>
        </VStack>
      </ScrollView>
      <CTAContainer />
    </VStack>
  );
};

export default ArticleDetail;
