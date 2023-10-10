import { ReactNode } from 'react';
import BottomNavigator from '~/components/BottomNavigator';
import SafeTopView from '~/components/SafeTopView';

type MainLayoutProp = { children: ReactNode; bottom?: boolean };

export const MainLayout = ({ children, bottom = false }: MainLayoutProp) => {
  return (
    <SafeTopView>
      {children}
      {bottom && <BottomNavigator />}
    </SafeTopView>
  );
};
