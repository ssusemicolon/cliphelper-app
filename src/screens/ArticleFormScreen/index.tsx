import ArticleForm from '~/components/ArticleForm';
import SafeView from '~/components/SafeView';
import { MainTabScreenProps } from '~/navigations/MainTabNavigator';

const ArticleFormScreen = ({ navigation }: MainTabScreenProps<'Form'>) => {
  const onSuccess = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeView bottom>
      <ArticleForm onSuccess={onSuccess} />
    </SafeView>
  );
};

export default ArticleFormScreen;
