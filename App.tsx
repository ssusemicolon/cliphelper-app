import React from 'react';

import AppProvider from '~/components/Provider';
import { Test } from '~/screens/Test';

function App(): JSX.Element {
  return (
    <AppProvider>
      <Test />
    </AppProvider>
  );
}

export default App;
