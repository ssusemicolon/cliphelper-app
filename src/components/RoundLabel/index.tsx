import { Box, ButtonText } from '@gluestack-ui/themed';

type RoundLabelProp = {
  children: string;
  bgColor?: string;
  fgColor?: string;
  borderColor?: string;
  onClick?: () => void;
};

const RoundLabel = ({
  children,
  onClick,
  bgColor = '$grey100',
  fgColor = '$primary900',
  borderColor,
}: RoundLabelProp) => {
  return (
    <Box
      bgColor={bgColor}
      borderColor={borderColor || fgColor}
      borderWidth={1}
      borderRadius={10}
    >
      <ButtonText
        onPress={() => onClick?.()}
        color={fgColor}
        fontSize={'$xs'}
        fontWeight="700"
        padding={0}
        paddingHorizontal={12}
        margin={0}
      >
        {children}
      </ButtonText>
    </Box>
  );
};

export default RoundLabel;
