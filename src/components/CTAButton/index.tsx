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
    <Box flex={1}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onClick?.()}>
        <Box
          bgColor={bgColor}
          borderRadius={6}
          flex={1}
          alignItems="center"
          justifyContent="center"
          paddingVertical={20}
        >
          <Text
            textAlignVertical="center"
            minHeight={20}
            color={fgColor}
            fontWeight="800"
            fontSize={'$lg'}
            alignItems="center"
            justifyContent="center"
          >
            {children}
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default CTAButton;
