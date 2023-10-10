import { Box, HStack, Text } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';

export const CTAContainer = () => {
  return (
    <HStack justifyContent="center" gap={10}>
      <Box
        bgColor="$focus300"
        borderRadius={6}
        flex={1}
        alignItems="center"
        paddingVertical={8}
      >
        <TouchableOpacity>
          <Text color="$grey100" fontWeight="800" fontSize={'$lg'}>
            삭제하기
          </Text>
        </TouchableOpacity>
      </Box>

      <Box
        bgColor="$primary900"
        borderRadius={6}
        flex={1}
        alignItems="center"
        paddingVertical={8}
      >
        <TouchableOpacity>
          <Text color="$grey100" fontWeight="800" fontSize={'$lg'}>
            바로가기
          </Text>
        </TouchableOpacity>
      </Box>
    </HStack>
  );
};
