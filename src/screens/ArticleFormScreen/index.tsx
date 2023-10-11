import ArticleForm from '~/components/ArticleForm';
import SafeView from '~/components/SafeView';

const ArticleFormScreen = () => {
  return (
    <SafeView bottom top>
      <ArticleForm />
    </SafeView>
  );
};

export default ArticleFormScreen;
