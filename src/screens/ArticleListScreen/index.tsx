import { ButtonIcon, Text } from '@gluestack-ui/themed';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    handlePresentModalPress(30);
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
        onChange={handleSheetChanges}
      >
        <CollectionSelector articleId={selectedArticle} />
      </BottomSheetModal>
    </SafeView>
  );
};
