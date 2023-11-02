import ArticleForm from '~/components/ArticleForm';
import SafeView from '~/components/SafeView';

const ArticleFormScreen = () => {
  return (
    <SafeView bottom>
      <ArticleForm />
    </SafeView>
  );
};

export default ArticleFormScreen;
