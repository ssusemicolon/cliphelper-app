import { HStack, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { useState } from 'react';
import { ArticleTextArea } from '../ArticleDetail/ArticleTextArea';
import CTAButton from '../CTAButton';
import Tags from '../Tags';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [memoContent, setMemoContent] = useState<string>('');

  return (
    <VStack justifyContent="space-between" paddingHorizontal={12} flex={1}>
      <ScrollView>
        <VStack paddingVertical={5} gap={24}>
          <VStack>
            <HStack justifyContent="space-between" paddingHorizontal={10}>
              <Text fontWeight="700" fontSize={'$lg'}>
                URL 또는 제목
              </Text>
            </HStack>
            <ArticleTextArea
              editable
              multiline
              maxLength={50}
              value={title}
              onChangeText={(t) => setTitle(t)}
              placeholder="https://velog.io/@jeehye03/ios-pod-%EC%82%AD%EC%A0%9C-%ED%81%B4%EB%A6%B0-%EB%AA%85%EB%A0%B9%EC%96%B4"
            />
          </VStack>
          <VStack>
            <HStack justifyContent="space-between" paddingHorizontal={10}>
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
          <VStack>
            <HStack justifyContent="space-between" paddingHorizontal={10}>
              <Text fontWeight="700" fontSize={'$lg'}>
                태그
              </Text>
            </HStack>
            <Tags tags={[]} edit />
          </VStack>
          <VStack>
            <HStack justifyContent="space-between" paddingHorizontal={10}>
              <Text fontWeight="700" fontSize={'$lg'}>
                파일
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>

      <HStack justifyContent="center" gap={10}>
        <CTAButton>저장하기</CTAButton>
      </HStack>
    </VStack>
  );
};

export default ArticleForm;
