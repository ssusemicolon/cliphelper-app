import { Box, Text, VStack } from '@gluestack-ui/themed';
import { LottieView } from '../LottieView';

type ErrorViewProp = {
  error?: string;
  message?: string;
  color?: string;
};

const ErrorView = ({
  error = '',
  message = '오류가 발생했어요',
  color = '$focus300',
}: ErrorViewProp) => {
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
      <Text
        size="lg"
        alignItems="center"
        justifyContent="center"
        fontWeight="900"
        color={color}
      >
        {error} {message}
      </Text>
    </VStack>
  );
};

export default ErrorView;
