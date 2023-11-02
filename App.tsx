import React from 'react';

import AppProvider from '~/components/Provider';
import { RootStackNavigator } from '~/navigations/RootStackNavigator';

function App(): JSX.Element {
  return (
    <AppProvider>
      <RootStackNavigator />
    </AppProvider>
  );
}

export default App;
