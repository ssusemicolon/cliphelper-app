import {
  HStack,
  Heading,
  Image,
  LinkIcon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import SafeView from '~/components/SafeView';
import { useGoogleAuth } from '~/features/auth/useGoogleAuth';
import { useKakaoAuth } from '~/features/auth/useKakaoAuth';

export const SignInScreen = () => {
  const { login: kakaoLogin } = useKakaoAuth();
  const { login: googleLogin } = useGoogleAuth();

  const onGoogleLogin = async () => {
    const result = await googleLogin();
    console.log(result);
  };

  const onKakaoLogin = async () => {
    await kakaoLogin();
  };

  return (
    <SafeView bottom>
      <VStack alignItems="center" justifyContent="center" flex={1} gap={40}>
        <HStack>
          <Heading
            fontSize={'$5xl'}
            fontWeight="700"
            color="$secondary900"
            alignItems="center"
          >
            {'Clip Helper'}
          </Heading>
          <LinkIcon color="$secondary900" />
        </HStack>
        <VStack gap={15}>
          <TouchableOpacity activeOpacity={0.5} onPress={onGoogleLogin}>
            <HStack
              gap={10}
              alignItems="center"
              paddingVertical={12}
              paddingLeft={10}
              paddingRight={40}
              borderRadius={6}
              borderColor="$grey300"
              borderWidth={1}
              borderBottomWidth={3}
            >
              <Image
                size="2xs"
                source={require('~/assets/images/google_logo.png')}
                alt="google login"
              />
              <Text paddingLeft={10} fontSize={18} color="$grey900">
                구글계정으로 로그인
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={onKakaoLogin}>
            <HStack
              gap={10}
              alignItems="center"
              bgColor="#FEE501"
              paddingVertical={5}
              paddingLeft={5}
              paddingRight={40}
              borderRadius={6}
            >
              <Image
                size={'xs'}
                source={require('~/assets/images/kakao_logo.png')}
                alt="kakao login"
              />
              <Text fontSize={18} color="$grey900">
                카카오계정으로 로그인
              </Text>
            </HStack>
          </TouchableOpacity>
        </VStack>
      </VStack>
    </SafeView>
  );
};
