import React from 'react';
import Toast from 'react-native-toast-message';
import { FcmInitializer } from '~/components/FcmInitializer';

import AppProvider from '~/components/Provider';
import { RootStackNavigator } from '~/navigations/RootStackNavigator';
import { toastConfig } from '~/utils/toastConfig';

function App(): JSX.Element {
  return (
    <AppProvider>
      <FcmInitializer />
      <RootStackNavigator />
      <Toast config={toastConfig} />
    </AppProvider>
  );
}

export default App;
