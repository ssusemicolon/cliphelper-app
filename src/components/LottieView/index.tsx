import { Box } from '@gluestack-ui/themed';
import Lottie from 'lottie-react-native';
import { ComponentProps } from 'react';

type LottieViewProps = {
  width?: number;
  height?: number;
} & Pick<ComponentProps<typeof Lottie>, 'source' | 'autoPlay' | 'loop'> &
  ComponentProps<typeof Box>;

export const LottieView = ({
  source,
  autoPlay,
  loop,
  width,
  height,
  ...restProps
}: LottieViewProps) => {
  return (
    <Box style={{ width, height }} {...restProps}>
      <Lottie
        source={source}
        autoPlay={autoPlay}
        loop={loop}
        style={{ width, height }}
      />
    </Box>
  );
};
