import { Box, ButtonText } from '@gluestack-ui/themed';

type RoundLabelProp = {
  children: string;
  bgColor?: string;
  fgColor?: string;
  onClick?: () => void;
};

const RoundLabel = ({
  children,
  onClick,
  bgColor = '$primary900',
  fgColor = '$grey100',
}: RoundLabelProp) => {
  return (
    <Box bgColor={bgColor} borderRadius={10}>
      <ButtonText
        onPress={() => onClick?.()}
        color={fgColor}
        fontSize={'$xs'}
        fontWeight="700"
        padding={0}
        paddingHorizontal={10}
        margin={0}
      >
        {children}
      </ButtonText>
    </Box>
  );
};

export default RoundLabel;
