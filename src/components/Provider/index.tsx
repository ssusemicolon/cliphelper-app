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

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

const linking = {
  prefixes: ['cliphelper://'],
  config: {
    screens: {
      // Auth
      Auth: {
        screens: {
          SignIn: {
            path: 'auth/signin',
          },
        },
      },

      // Article
      Article: {
        screens: {
          List: {
            path: 'article/list',
          },
          Detail: {
            path: 'article/detail/:id',
          },
        },
      },

      // Collection
      Collection: {
        screens: {
          List: {
            path: 'collection/list',
          },
          Detail: {
            path: 'collection/detail/:id',
          },
        },
      },

      // Article
      Main: {
        screens: {
          Home: {
            path: 'main/home',
          },
          Search: {
            path: 'main/search',
          },
          Form: {
            path: 'main/form',
          },
          Collections: {
            screens: {
              My: {
                path: 'main/collections/my',
              },
              Bookmark: {
                path: 'main/collections/bookmark',
              },
            },
          },
          Profile: {
            path: 'main/profile',
          },
        },
      },
    },
  },
};

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <PersistProvider>
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <NavigationContainer linking={linking}>
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
