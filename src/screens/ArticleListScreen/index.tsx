import { ButtonIcon, Text } from '@gluestack-ui/themed';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef, useState } from 'react';
import ArticleList from '~/components/ArticleList';
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import SafeView from '~/components/SafeView';
import { CollectionSelector } from '~/containers/CollectionSelector';
import { useArticleList } from '~/features/article/article.hooks';

export const ArticleListScreen = () => {
  const { data } = useArticleList();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedArticle, setSelectedArticle] = useState(0);

  // variables
  const snapPoints = useMemo(() => ['70%'], []);

  // callbacks
  const handlePresentModalPress = useCallback((id: number) => {
    setSelectedArticle(id);
    bottomSheetModalRef.current?.present();
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeView>
      <Header
        right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
      />
      <ArticleList articles={data} onLongClick={handlePresentModalPress} />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
      >
        <CollectionSelector articleId={selectedArticle} />
      </BottomSheetModal>
    </SafeView>
  );
};
