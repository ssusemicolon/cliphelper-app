import { HStack, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { useRef, useState } from 'react';
import { parseSite } from '~/utils/parseSite';
import useDebounce from '~/utils/useDebounce';
import { ArticleTextArea } from '../../components/ArticleDetail/ArticleTextArea';
import CTAButton from '../../components/CTAButton';
import Tags from '../../components/Tags';
import { useArticleAppendMutation } from '~/features/article/article.hooks';
import { FileType, UploadHelper } from '~/components/UploadHelper';

type ArticleFormProps = {
  onSuccess?: () => void;
};

const ArticleForm = ({ onSuccess }: ArticleFormProps) => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const description = useRef<string>('');
  const thumbnail = useRef<string>('');
  const [memoContent, setMemoContent] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [file, setFile] = useState<FileType[]>([]);

  const { mutate: saveArticle } = useArticleAppendMutation();

  const handleSave = () => {
    console.log('file[0]: ', typeof file[0]);
    saveArticle(
      {
        url,
        title,
        memo: memoContent,
        thumbnail: thumbnail?.current,
        description: description?.current,
        tags,
        file: file[0],
      },
      {
        onSuccess: () => {
          initState();
          onSuccess?.();
        },
      },
    );
  };

  const initState = () => {
    setUrl('');
    setTitle('');
    description.current = '';
    thumbnail.current = '';
    setMemoContent('');
    setTags([]);
    setFile([]);
  };

  const onChangeUrl = (t: string) => {
    setUrl(t);
    getSiteInfo(t);
  };

  const getSiteInfo = useDebounce(async (t: string) => {
    const result = await parseSite(t);
    if (result?.title) {
      setTitle(result?.title);
    }

    if (result?.description) {
      description.current = result?.description?.substring(0, 100);
    }

    if (result?.thumbnail) {
      thumbnail.current = result?.thumbnail;
    }
  });

  return (
    <VStack justifyContent="space-between" paddingHorizontal={12} flex={1}>
      <ScrollView>
        <VStack paddingVertical={5} gap={24}>
          <VStack>
            <HStack justifyContent="space-between" paddingHorizontal={10}>
              <Text fontWeight="700" fontSize={'$lg'}>
                URL
              </Text>
            </HStack>
            <ArticleTextArea
              editable
              multiline
              maxLength={200}
              value={url}
              onChangeText={onChangeUrl}
              placeholder="https://velog.io/@jeehye03/ios-pod-%EC%82%AD%EC%A0%9C-%ED%81%B4%EB%A6%B0-%EB%AA%85%EB%A0%B9%EC%96%B4"
            />
          </VStack>
          <VStack>
            <HStack justifyContent="space-between" paddingHorizontal={10}>
              <Text fontWeight="700" fontSize={'$lg'}>
                제목
              </Text>
            </HStack>
            <ArticleTextArea
              editable
              maxLength={50}
              value={title}
              onChangeText={(t) => setTitle(t)}
              placeholder="홍길동전"
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
            <Tags tags={tags} edit setTags={setTags} />
          </VStack>
          <VStack>
            <HStack justifyContent="space-between" paddingHorizontal={10}>
              <Text fontWeight="700" fontSize={'$lg'}>
                파일
              </Text>
            </HStack>
            <UploadHelper onPickFile={(files) => setFile(files)}>
              <Text>파일선택</Text>
            </UploadHelper>
            <Text>{file.length > 0 && file[0].name}</Text>
          </VStack>
        </VStack>
      </ScrollView>

      <HStack justifyContent="center" gap={10}>
        <CTAButton onClick={handleSave}>저장하기</CTAButton>
      </HStack>
    </VStack>
  );
};

export default ArticleForm;
