import {
  ButtonIcon,
  EditIcon,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { RoundedPlusIcon } from '~/components/Icon/PlusIcon';
import SafeView from '~/components/SafeView';
import demo from './demo.json';
import { useCallback, useMemo, useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import TimeSelector from '~/components/TimeSelector';

export const UserProfileScreen = () => {
  const { user } = JSON.parse(JSON.stringify(demo));
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const {
    username,
    thumb,
    numberOfArticle,
    numberOfCollection,
    numberOfFollower,
    preferAlarmTime,
  } = user;

  return (
    <SafeView>
      <ScrollView>
        <VStack borderWidth={1} bgColor="$primary900" paddingBottom={25}>
          <HStack justifyContent="flex-end" padding={10}>
            <ButtonIcon size="xl" color="$grey100" as={EditIcon} />
          </HStack>
          <VStack alignItems="center" gap={12}>
            <Image
              width={150}
              height={150}
              borderRadius={80}
              source={{ uri: thumb }}
              alt="user thumbnail image"
            />
            <Text fontWeight="700" fontSize={'$lg'} color="$grey100">
              {username}
            </Text>
          </VStack>
        </VStack>

        <HStack justifyContent="space-around" paddingVertical={25}>
          <VStack alignItems="center" gap={5}>
            <Text color="$primary900" fontSize={'$xl'} fontWeight="700">
              {numberOfArticle}
            </Text>
            <Text color="$primary900" fontSize={'$md'} fontWeight="600">
              스크랩
            </Text>
          </VStack>

          <VStack alignItems="center" gap={5}>
            <Text color="$primary900" fontSize={'$xl'} fontWeight="700">
              {numberOfCollection}
            </Text>
            <Text color="$primary900" fontSize={'$md'} fontWeight="600">
              북마크
            </Text>
          </VStack>

          <VStack alignItems="center" gap={5}>
            <Text color="$primary900" fontSize={'$xl'} fontWeight="700">
              {numberOfFollower}
            </Text>
            <Text color="$primary900" fontSize={'$md'} fontWeight="600">
              팔로워
            </Text>
          </VStack>
        </HStack>
        <VStack paddingHorizontal={20} marginTop={20} gap={20}>
          <Text fontWeight="700" fontSize={'$lg'}>
            알림받을 시간
          </Text>
          <HStack justifyContent="space-around">
            {preferAlarmTime?.map((p: string) => {
              return (
                <TouchableOpacity key={p} onPress={handlePresentModalPress}>
                  <Text color="$primary900" fontSize={'$xl'} fontWeight="700">
                    {p}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity onPress={handlePresentModalPress}>
              <ButtonIcon color="$primary900" as={RoundedPlusIcon} size="lg" />
            </TouchableOpacity>
          </HStack>
        </VStack>
        <VStack justifyContent="flex-end" marginTop={50} padding={20} gap={20}>
          <Text fontWeight="700" fontSize={'$lg'}>
            계정관리
          </Text>
          <HStack paddingLeft={10} gap={10}>
            <TouchableOpacity>
              <Text color="$primary900" fontWeight="700">
                로그아웃
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text color="$primary900" fontWeight="700">
                회원탈퇴
              </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ScrollView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <TimeSelector />
      </BottomSheetModal>
    </SafeView>
  );
};
