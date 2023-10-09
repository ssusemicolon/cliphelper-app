import { ReactNode } from 'react';
import BottomNavigator from '~/components/BottomNavigator';
import Header from '~/components/Header';
import SafeTopView from '~/components/SafeTopView';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeTopView>
      <Header />
      {children}
      <BottomNavigator />
    </SafeTopView>
  );
};
