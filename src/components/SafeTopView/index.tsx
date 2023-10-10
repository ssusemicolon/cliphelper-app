import { VStack } from '@gluestack-ui/themed';
import { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeTopView = ({ children }: { children: ReactNode }) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <VStack
      height={'$full'}
      borderWidth={1}
      borderColor="red"
      paddingTop={top}
      paddingBottom={bottom}
    >
      {children}
    </VStack>
  );
};

export default SafeTopView;
