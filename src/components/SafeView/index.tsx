import { VStack } from '@gluestack-ui/themed';
import { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SafeViewProps = { children: ReactNode; bottom?: boolean; top?: boolean };

const SafeView = ({ children, bottom, top }: SafeViewProps) => {
  const { top: topInsets, bottom: bottomInsets } = useSafeAreaInsets();

  return (
    <VStack
      height={'$full'}
      paddingTop={top ? topInsets : 0}
      paddingBottom={bottom ? bottomInsets : 0}
      bgColor="$grey100"
    >
      {children}
    </VStack>
  );
};

export default SafeView;
