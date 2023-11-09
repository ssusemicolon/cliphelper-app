import { ButtonIcon } from '@gluestack-ui/themed';
import { Text } from 'react-native-svg';
import ArticleDetail from '~/components/ArticleDetail';
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import SafeView from '~/components/SafeView';
import {
  useArticleDetail,
  useArticleRemoveMutation,
} from '~/features/article/article.hooks';
import { ArticleStackScreenProps } from '~/navigations/ArticleStackNavigator';

export const ArticleDetailScreen = ({
  route,
  navigation,
}: ArticleStackScreenProps<'Detail'>) => {
  console.log('params: ', route.params);
  const { id } = route.params;
  const { data } = useArticleDetail(id);
  const { mutate: remove } = useArticleRemoveMutation();

  console.log(data);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const onDelete = () => {
    remove(id, {
      onSuccess: () => {
        navigation.goBack();
      },
    });
  };

  const onLink = () => {
    console.log('clicked');
  };

  return (
    <SafeView top>
      <Header
        right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
      />
      <ArticleDetail onDelete={onDelete} onLink={onLink} {...data} />
    </SafeView>
  );
};
