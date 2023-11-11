import {
  ButtonIcon,
  EditIcon,
  HStack,
  Image,
  ScrollView,
  Switch,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { RoundedPlusIcon } from '~/components/Icon/PlusIcon';
import SafeView from '~/components/SafeView';
import TimeSelector from '~/components/TimeSelector';
import {
  useAlarm,
  useAppendAlarmMutation,
  useEnableAlarmMutation,
  useModifyAlarmMutation,
  useRemoveAlarmMutation,
  useUserProfile,
} from '~/features/user/user.hooks';
import { colors } from '~/theme';

const UserTextArea = styled(TextInput)`
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #c8c8c8;
  width: 200px;
  background-color: ${() => colors.grey100};
`;

/**
 * @todo 사용자 프로필 편집
 *
 */
export const UserProfileScreen = () => {
  // profile
  const { data: user } = useUserProfile();
  const [enableEdit, setEnableEdit] = useState(false);
  const [editUsername, setEditUsername] = useState('');

  // alarm
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { data: alarm } = useAlarm();
  const [selectedAlarmId, setSelectedAlarmId] = useState(0);
  const [currentAlarmTime, setCurrentAlarmTime] = useState('12:30');
  const { mutate: appendAlarm } = useAppendAlarmMutation();
  const { mutate: modifyAlarm } = useModifyAlarmMutation();
  const { mutate: removeAlarm } = useRemoveAlarmMutation();
  const { mutate: enableAlarm } = useEnableAlarmMutation();

  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleNotifications = (isEnable: boolean) => {
    enableAlarm(isEnable);
  };

  const handleCancelAlarm = () => {
    bottomSheetModalRef.current?.close();
  };

  const handleRemoveAlarm = (id: number) => {
    removeAlarm(id, {
      onSuccess: () => {
        bottomSheetModalRef.current?.close();
      },
    });
  };

  const handleSelectAlarm = (id: number, time: string) => {
    if (id) {
      modifyAlarm(
        { alarmId: id, time },
        {
          onSuccess: () => {
            bottomSheetModalRef.current?.close();
          },
        },
      );
      return;
    }

    appendAlarm(time, {
      onSuccess: () => {
        bottomSheetModalRef.current?.close();
      },
    });
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    setEditUsername(user.username);
  }, [user]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  const {
    email,
    username,
    picture,
    enableNotifications,
    articleCount,
    collectionCount,
    followerCount,
  } = user;

  return (
    <SafeView>
      <ScrollView>
        <VStack bgColor="$primary900" paddingBottom={25}>
          <HStack justifyContent="flex-end" padding={10}>
            {enableEdit ? (
              <HStack alignItems="center" justifyContent="center" gap={20}>
                <TouchableOpacity
                  onPress={() => {
                    setEnableEdit(false);
                  }}
                >
                  <Text fontSize={'$md'} fontWeight="700" color="$focus300">
                    취소
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text fontSize={'$md'} fontWeight="700" color="$secondary700">
                    저장
                  </Text>
                </TouchableOpacity>
              </HStack>
            ) : (
              <TouchableOpacity onPress={() => setEnableEdit(true)}>
                <ButtonIcon size="xl" color="$grey100" as={EditIcon} />
              </TouchableOpacity>
            )}
          </HStack>
          <VStack alignItems="center" gap={12} flex={1}>
            <Image
              width={150}
              height={150}
              borderRadius={80}
              source={
                picture
                  ? { uri: picture }
                  : require('~/assets/images/default_profile.png')
              }
              alt="user thumbnail image"
            />
            <VStack alignItems="center" width={'100%'} gap={10}>
              <Text fontWeight="700" fontSize={'$lg'} color="$grey100">
                {email}
              </Text>
              {enableEdit ? (
                <UserTextArea
                  maxLength={10}
                  numberOfLines={1}
                  value={editUsername}
                  onChangeText={(t) => setEditUsername(t)}
                />
              ) : (
                <Text fontWeight="700" fontSize={'$lg'} color="$grey100">
                  {username}
                </Text>
              )}
            </VStack>
          </VStack>
        </VStack>

        <HStack justifyContent="space-around" paddingVertical={25}>
          <VStack alignItems="center" gap={5}>
            <Text color="$primary900" fontSize={'$xl'} fontWeight="700">
              {articleCount}
            </Text>
            <Text color="$primary900" fontSize={'$md'} fontWeight="600">
              스크랩
            </Text>
          </VStack>

          <VStack alignItems="center" gap={5}>
            <Text color="$primary900" fontSize={'$xl'} fontWeight="700">
              {collectionCount}
            </Text>
            <Text color="$primary900" fontSize={'$md'} fontWeight="600">
              북마크
            </Text>
          </VStack>

          <VStack alignItems="center" gap={5}>
            <Text color="$primary900" fontSize={'$xl'} fontWeight="700">
              {followerCount}
            </Text>
            <Text color="$primary900" fontSize={'$md'} fontWeight="600">
              팔로워
            </Text>
          </VStack>
        </HStack>
        <VStack paddingHorizontal={10} marginTop={20} gap={20}>
          <VStack paddingHorizontal={20} marginTop={20} gap={20}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="700" fontSize={'$lg'}>
                알림받을 시간
              </Text>
              <Switch
                size="sm"
                trackColor={{ false: '$grey500', true: '$secondary900' }}
                defaultValue={enableNotifications}
                onValueChange={(selected) => handleNotifications(selected)}
              />
            </HStack>
            <HStack justifyContent="space-around">
              {alarm?.map(({ alarmTimeId, time }: AlarmListItem) => {
                return (
                  <TouchableOpacity
                    disabled={!enableNotifications}
                    key={alarmTimeId}
                    onPress={() => {
                      setCurrentAlarmTime(time);
                      setSelectedAlarmId(alarmTimeId);
                      handlePresentModalPress();
                    }}
                  >
                    <Text
                      color={enableNotifications ? '$primary900' : '$grey400'}
                      fontSize={'$xl'}
                      fontWeight="700"
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                );
              })}
              {alarm && alarm?.length < 4 && (
                <TouchableOpacity
                  onPress={() => {
                    setCurrentAlarmTime('12:30');
                    setSelectedAlarmId(0);
                    handlePresentModalPress();
                  }}
                >
                  <HStack gap={3} alignItems="center">
                    <Text fontWeight="700" color="$primary900">
                      알림추가
                    </Text>
                    <ButtonIcon
                      color="$primary900"
                      as={RoundedPlusIcon}
                      size="lg"
                    />
                  </HStack>
                </TouchableOpacity>
              )}
            </HStack>
          </VStack>
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
      >
        <TimeSelector
          id={selectedAlarmId}
          time={currentAlarmTime}
          onRemove={handleRemoveAlarm}
          onCancel={handleCancelAlarm}
          onSelect={handleSelectAlarm}
        />
      </BottomSheetModal>
    </SafeView>
  );
};
