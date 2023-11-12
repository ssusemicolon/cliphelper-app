import { ButtonIcon, VStack } from '@gluestack-ui/themed';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef, useState } from 'react';
import ArticleList from '~/components/ArticleList';
import ErrorView from '~/components/ErrorView';
import Header from '~/components/Header';
import { SearchIcon } from '~/components/Icon/SearchIcon';
import { GrowingLoadingView } from '~/components/Loading/GrowingLoadingView';
import SafeView from '~/components/SafeView';
import { CollectionSelector } from '~/containers/CollectionSelector';
import { useArticleList } from '~/features/article/article.hooks';

export const ArticleListScreen = () => {
  const { data, isLoading, error } = useArticleList();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedArticle, setSelectedArticle] = useState(0);

  // variables
  const snapPoints = useMemo(() => ['70%'], []);

  // callbacks
  const handlePresentModalPress = useCallback((id: number) => {
    setSelectedArticle(id);
    bottomSheetModalRef.current?.present();
  }, []);

  if (isLoading) {
    return (
      <SafeView>
        <VStack justifyContent="center" alignItems="center" flex={1}>
          <GrowingLoadingView />
        </VStack>
      </SafeView>
    );
  }

  if (!data || error) {
    return (
      <SafeView>
        <VStack justifyContent="center" alignItems="center" flex={1}>
          <ErrorView />
        </VStack>
      </SafeView>
    );
  }

  return (
    <SafeView>
      <Header
        right={<ButtonIcon size="xl" color="$primary900" as={SearchIcon} />}
      />
      {data?.length > 0 ? (
        <ArticleList articles={data} onLongClick={handlePresentModalPress} />
      ) : (
        <VStack justifyContent="center" alignItems="center" flex={1}>
          <ErrorView
            message={'아직 스크랩이 없네요\n스크랩을 만들어보세요'}
            color="$focus200"
          />
        </VStack>
      )}
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
