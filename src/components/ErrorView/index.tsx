import { Box, Text, VStack } from '@gluestack-ui/themed';
import { LottieView } from '../LottieView';

type ErrorViewProp = {
  message?: string;
};

const ErrorView = ({ message = '오류가 발생했어요' }: ErrorViewProp) => {
  return (
    <VStack paddingHorizontal={50} alignItems="center">
      <Box alignItems="center">
        <LottieView
          width={200}
          height={200}
          source={require('~/assets/lotties/dog.json')}
          autoPlay
        />
      </Box>
      <Text size="lg" fontWeight="900" color="$focus200">
        {message}
      </Text>
    </VStack>
  );
};

export default ErrorView;
