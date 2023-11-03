/* eslint-disable react-native/no-inline-styles */
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { ThemeProvider } from '~/theme';
import PersistProvider from '../../store/PersistProvider';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const client = new QueryClient();

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <PersistProvider>
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <NavigationContainer>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
              </GestureHandlerRootView>
            </SafeAreaProvider>
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </PersistProvider>
  );
};

export default AppProvider;
