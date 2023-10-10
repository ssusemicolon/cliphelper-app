import { Box } from '@gluestack-ui/themed';
import { LottieView } from '../LottieView';

export const GrowingLoadingView = () => {
  return (
    <Box alignItems="center">
      <LottieView
        width={120}
        height={120}
        source={require('~/assets/lotties/grow_loading.json')}
        autoPlay
      />
    </Box>
  );
};
