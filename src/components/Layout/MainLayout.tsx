import { ReactNode } from 'react';
import BottomNavigator from '~/components/BottomNavigator';
import SafeTopView from '~/components/SafeTopView';

type MainLayoutProp = { children: ReactNode };

export const MainLayout = ({ children }: MainLayoutProp) => {
  return (
    <SafeTopView>
      {children}
      <BottomNavigator />
    </SafeTopView>
  );
};
