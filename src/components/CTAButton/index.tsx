import { Box, Text } from '@gluestack-ui/themed';
import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

type CTAButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  bgColor?: string;
  fgColor?: string;
};

const CTAButton = ({
  children,
  onClick,
  bgColor = '$primary900',
  fgColor = '$grey100',
}: CTAButtonProps) => {
  return (
    <Box
      bgColor={bgColor}
      borderRadius={6}
      flex={1}
      alignItems="center"
      paddingVertical={8}
    >
      <TouchableOpacity onPress={() => onClick?.()}>
        <Text color={fgColor} fontWeight="800" fontSize={'$lg'}>
          {children}
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default CTAButton;
