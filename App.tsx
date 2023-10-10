import React from 'react';

import AppProvider from '~/components/Provider';
import { ArticleListScreen } from '~/screens/ArticleListScreen';
import { Test } from '~/screens/Test';

function App(): JSX.Element {
  return (
    <AppProvider>
      <Test />
      {/* <ArticleListScreen /> */}
    </AppProvider>
  );
}

export default App;
