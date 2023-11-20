import React from 'react';
import Toast from 'react-native-toast-message';

import AppProvider from '~/components/Provider';
import { RootStackNavigator } from '~/navigations/RootStackNavigator';
import { toastConfig } from '~/utils/toastConfig';

function App(): JSX.Element {
  return (
    <AppProvider>
      <RootStackNavigator />
      <Toast config={toastConfig} />
    </AppProvider>
  );
}

export default App;
