import React from 'react';
import { FcmInitializer } from '~/components/FcmInitializer';

import AppProvider from '~/components/Provider';
import { RootStackNavigator } from '~/navigations/RootStackNavigator';

function App(): JSX.Element {
  return (
    <AppProvider>
      <FcmInitializer />
      <RootStackNavigator />
    </AppProvider>
  );
}

export default App;
