import {
  ButtonIcon,
  EditIcon,
  HStack,
  Text,
  TrashIcon,
} from '@gluestack-ui/themed';
import { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import CollectionDetail from '~/components/CollectionDetail';
import Header from '~/components/Header';
import SafeView from '~/components/SafeView';
import {
  useCollectionDetail,
  useCollectionModifyMutation,
  useCollectionRemoveMutation,
} from '~/features/collection/collection.hooks';
import { CollectionStackScreenProps } from '~/navigations/CollectionStackNavigator';
import { useAppSelector } from '~/store';

export const CollectionDetailScreen = ({
  route,
  navigation,
}: CollectionStackScreenProps<'Detail'>) => {
  const { id } = route.params;
  const { userId } = useAppSelector((state) => state.auth);
  const { data } = useCollectionDetail(id);
  const { mutate: modifyCollection } = useCollectionModifyMutation(id);
  const { mutate: removeCollection } = useCollectionRemoveMutation();
  const [editable, setEditable] = useState(false);
  const [editForm, setEditForm] = useState<CollectionModifyForm>({
    title: '',
    description: '',
    isPublic: false,
  });

  const init = useCallback(() => {
    if (!data) {
      return;
    }
    const { title, description, isPublic } = data;
    setEditForm({ title, description, isPublic });
  }, [data]);

  useEffect(() => {
    if (!data) {
      return;
    }
    init();
  }, [data, init]);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const onSave = () => {
    modifyCollection(
      { collectionId: id, form: editForm },
      {
        onSuccess: () => {
          init();
          setEditable(false);
        },
      },
    );
  };

  const onRemove = () => {
    removeCollection(id, {
      onSuccess: () => {
        navigation.goBack();
      },
    });
  };

  const combinedData = { ...data, ...editForm };

  return (
    <SafeView top>
      <Header
        showTitle={false}
        height={'auto'}
        right={
          userId === combinedData.user?.userId ? (
            <HStack gap={20}>
              <TouchableOpacity onPress={onRemove}>
                <ButtonIcon size="xl" color="$focus400" as={TrashIcon} />
              </TouchableOpacity>
              {editable ? (
                <TouchableOpacity onPress={onSave}>
                  <Text color="$primary900" fontWeight="700">
                    완료
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setEditable(true)}>
                  <ButtonIcon size="xl" color="$primary900" as={EditIcon} />
                </TouchableOpacity>
              )}
            </HStack>
          ) : (
            <></>
          )
        }
      />
      <CollectionDetail
        data={combinedData}
        editable={editable}
        onChange={setEditForm}
      />
    </SafeView>
  );
};
