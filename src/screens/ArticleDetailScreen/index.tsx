import {
  ButtonIcon,
  EditIcon,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import ArticleDetail from '~/components/ArticleDetail';
import ErrorView from '~/components/ErrorView';
import Header from '~/components/Header';
import { GrowingLoadingView } from '~/components/Loading/GrowingLoadingView';
import SafeView from '~/components/SafeView';
import {
  useArticleDetail,
  useArticleModifyMutation,
  useArticleRemoveMutation,
} from '~/features/article/article.hooks';
import { ArticleStackScreenProps } from '~/navigations/ArticleStackNavigator';
import { RootStackParamList } from '~/navigations/RootStackNavigator';
import { useAppDispatch, useAppSelector } from '~/store';
import { articleFormActions } from '~/store/slices/articleForm';

export const ArticleDetailScreen = ({
  route,
}: ArticleStackScreenProps<'Detail'>) => {
  const { id } = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { data, isLoading, error } = useArticleDetail(id);
  const { mutate: modify } = useArticleModifyMutation(id);
  const { mutate: remove } = useArticleRemoveMutation();
  const [editable, setEditable] = useState(false);
  const articleForm = useAppSelector((state) => state.articleForm);
  const { userId } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const init = useCallback(() => {
    if (!data) {
      return;
    }
    dispatch(articleFormActions.init(data));
  }, [data, dispatch]);

  useEffect(() => {
    init();
  }, [init]);

  if (isLoading) {
    return (
      <SafeView>
        <Header />
        <VStack justifyContent="center" alignItems="center" flex={1}>
          <GrowingLoadingView />
        </VStack>
      </SafeView>
    );
  }

  if (!data || error) {
    return (
      <SafeView>
        <Header />
        <VStack justifyContent="center" alignItems="center" flex={1}>
          <ErrorView />
        </VStack>
      </SafeView>
    );
  }

  const combinedArticle = { ...data, ...articleForm };

  const onDelete = () => {
    remove(id, {
      onSuccess: () => {
        navigation.goBack();
      },
    });
  };

  const onLink = () => {
    navigation.navigate('WebView', {
      uri: combinedArticle.url,
    });
  };

  const onCancel = () => {
    setEditable(false);
    init();
  };

  const onSave = () => {
    modify(articleForm, {
      onSuccess: () => {
        setEditable(false);
      },
    });
  };

  return (
    <SafeView>
      <Header
        showTitle={false}
        right={
          userId === combinedArticle.userId ? (
            editable ? (
              <HStack gap={30}>
                <TouchableOpacity onPress={onCancel}>
                  <Text color="$focus400" fontWeight="700">
                    취소
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSave}>
                  <Text color="$primary900" fontWeight="700">
                    저장
                  </Text>
                </TouchableOpacity>
              </HStack>
            ) : (
              <TouchableOpacity onPress={() => setEditable(!editable)}>
                <ButtonIcon size="xl" color="$primary900" as={EditIcon} />
              </TouchableOpacity>
            )
          ) : (
            <></>
          )
        }
      />
      <ArticleDetail
        onDelete={onDelete}
        onLink={onLink}
        editable={editable}
        {...combinedArticle}
      />
    </SafeView>
  );
};
