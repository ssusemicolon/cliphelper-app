import {
  HStack,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useState } from 'react';
import { useCollectionAppendMutation } from '~/features/collection/collection.hooks';
import { ArticleTextArea } from '../../components/ArticleDetail/ArticleTextArea';
import CTAButton from '../../components/CTAButton';

type CollectionFormProps = {
  onSuccess?: () => void;
};

const CollectionForm = ({ onSuccess }: CollectionFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const { mutate: appendCollection } = useCollectionAppendMutation();

  const handleSave = () => {
    appendCollection(
      {
        title,
        description,
        isPublic,
        articles: [],
      },
      {
        onSuccess: () => {
          onSuccess?.();
        },
      },
    );
  };

  return (
    <VStack justifyContent="space-between" paddingHorizontal={12} flex={1}>
      <ScrollView flex={1}>
        <KeyboardAvoidingView>
          <VStack gap={20}>
            <VStack gap={5}>
              <HStack justifyContent="space-between" paddingHorizontal={10}>
                <Text fontWeight="700" fontSize={'$lg'}>
                  컬렉션 이름
                </Text>
              </HStack>
              <ArticleTextArea
                editable
                maxLength={50}
                value={title}
                onChangeText={(t) => setTitle(t)}
              />
            </VStack>
            <VStack gap={5}>
              <HStack justifyContent="space-between" paddingHorizontal={10}>
                <Text fontWeight="700" fontSize={'$lg'}>
                  설명
                </Text>
              </HStack>
              <ArticleTextArea
                editable
                maxLength={100}
                value={description}
                onChangeText={(t) => setDescription(t)}
              />
            </VStack>
            <VStack gap={5}>
              <HStack justifyContent="space-between" paddingHorizontal={10}>
                <Text fontWeight="700" fontSize={'$lg'}>
                  공개여부
                </Text>
                <Switch
                  size="sm"
                  trackColor={{ false: '$grey500', true: '$secondary900' }}
                  onValueChange={(selected) => setIsPublic(selected)}
                />
              </HStack>
            </VStack>
          </VStack>
        </KeyboardAvoidingView>
      </ScrollView>

      <HStack justifyContent="center">
        <CTAButton onClick={handleSave}>저장하기</CTAButton>
      </HStack>
    </VStack>
  );
};

export default CollectionForm;
