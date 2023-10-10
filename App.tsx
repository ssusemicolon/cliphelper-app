import React from 'react';

import AppProvider from '~/components/Provider';
import { ArticleDetailScreen } from '~/screens/ArticleDetailScreen';
import ArticleFormScreen from '~/screens/ArticleFormScreen';
import { ArticleListScreen } from '~/screens/ArticleListScreen';
import { Test } from '~/screens/Test';

function App(): JSX.Element {
  return (
    <AppProvider>
      {/* <ArticleDetailScreen /> */}
      {/* <ArticleListScreen /> */}
      <ArticleFormScreen />
    </AppProvider>
  );
}

export default App;
