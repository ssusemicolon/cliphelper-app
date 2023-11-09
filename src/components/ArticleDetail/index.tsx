import {
  ButtonIcon,
  HStack,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { fromNow } from '~/utils/date-formatter';
import CTAButton from '../CTAButton';
import { SaveIcon } from '../Icon/SaveIcon';
import ArticleThumb from '../Image/ArticleThumb';
import Tags from '../Tags';
import { ArticleTextArea } from './ArticleTextArea';

interface ArticleDetailProp extends ArticleDetail {
  onDelete?: () => void;
  onLink?: () => void;
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
  } = prop;

  const [memoContent, setMemoContent] = useState<string>(memo);

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

          <Tags tags={tags} edit />

          <VStack>
            <HStack justifyContent="space-between" paddingHorizontal={10}>
              <Text fontWeight="700" fontSize={'$lg'}>
                메모
              </Text>
              <TouchableOpacity>
                <HStack
                  alignItems="center"
                  justifyContent="center"
                  borderLeftColor="$primary900"
                  gap={2}
                >
                  <Text color="$primary900" fontWeight="600" fontSize={'$sm'}>
                    저장
                  </Text>
                  <ButtonIcon color="$primary900" size="md" as={SaveIcon} />
                </HStack>
              </TouchableOpacity>
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
