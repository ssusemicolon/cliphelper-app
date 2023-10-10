import { HStack, Text } from '@gluestack-ui/themed';
import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

type RoundLabelProp = {
  children: string;
  left?: ReactNode;
  right?: ReactNode;
  bgColor?: string;
  fgColor?: string;
  borderColor?: string;
  onClick?: () => void;
};

const RoundLabel = ({
  children,
  left,
  right,
  onClick,
  bgColor = '$grey100',
  fgColor = '$primary900',
  borderColor,
}: RoundLabelProp) => {
  return (
    <HStack
      bgColor={bgColor}
      borderColor={borderColor || fgColor}
      borderWidth={1}
      borderRadius={10}
      alignItems="center"
    >
      {left}
      <TouchableOpacity onPress={() => onClick?.()} activeOpacity={0.5}>
        <Text
          color={fgColor}
          size={'xs'}
          fontWeight="700"
          paddingHorizontal={12}
        >
          {children}
        </Text>
      </TouchableOpacity>
      {right}
    </HStack>
  );
};

export default RoundLabel;
