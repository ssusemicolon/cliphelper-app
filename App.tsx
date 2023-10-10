import React from 'react';

import AppProvider from '~/components/Provider';
import { ArticleDetailScreen } from '~/screens/ArticleDetailScreen';
import { ArticleListScreen } from '~/screens/ArticleListScreen';
import { Test } from '~/screens/Test';

function App(): JSX.Element {
  return (
    <AppProvider>
      <ArticleDetailScreen />
      {/* <ArticleListScreen /> */}
    </AppProvider>
  );
}

export default App;
