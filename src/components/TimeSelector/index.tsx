/* eslint-disable react-native/no-inline-styles */
import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import WheelPicker from 'react-native-wheely';
import { colors } from '~/theme';

type TimeSelectorProps = {
  id?: number;
  time?: string;
  onRemove?: (id: number) => void;
  onSelect?: (id: number, selectedTime: string) => void;
  onCancel?: () => void;
};

const TimeSelector = ({
  id = 0,
  time,
  onRemove,
  onSelect,
  onCancel,
}: TimeSelectorProps) => {
  const hours = [...Array(24).keys()].map((k) => k.toString().padStart(2, '0'));
  const minutes = [...Array(60 / 10).keys()].map((k) => (k * 10).toString());

  const [initHour, initMinute] = time?.split(':') || ['0', '0'];
  const hourIndex = hours.findIndex((h) => h === initHour);
  const minuteIndex = minutes.findIndex((m) => m === initMinute);

  const [selectedHourIndex, setSelectedHourIndex] = useState(
    hourIndex < 0 ? 0 : hourIndex,
  );
  const [selectedMinuteIndex, setSelectedMinuteIndex] = useState(
    minuteIndex < 0 ? 0 : minuteIndex,
  );

  const onSave = () => {
    onSelect?.(
      id || 0,
      `${hours[selectedHourIndex]}:${minutes[selectedMinuteIndex]}`,
    );
  };

  return (
    <VStack>
      <HStack paddingHorizontal={12} justifyContent="flex-end" gap={20}>
        {id > 0 && (
          <TouchableOpacity onPress={() => onRemove?.(id)}>
            <Text fontSize={'$md'} fontWeight="700" color="$focus300">
              삭제
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={onCancel}>
          <Text fontSize={'$md'} fontWeight="700" color="$focus300">
            취소
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSave}>
          <Text fontSize={'$md'} fontWeight="700" color="$primary900">
            저장
          </Text>
        </TouchableOpacity>
      </HStack>
      <HStack
        justifyContent="center"
        alignItems="center"
        gap={15}
        bgColor="grey900"
      >
        <WheelPicker
          itemTextStyle={{
            fontSize: 20,
            color: colors.primary900,
            fontWeight: '700',
          }}
          containerStyle={{ backgroundColor: colors.grey100 }}
          selectedIndex={selectedHourIndex}
          options={hours}
          onChange={(index) => setSelectedHourIndex(index)}
        />
        <Text fontSize={24}>:</Text>
        <WheelPicker
          itemTextStyle={{
            fontSize: 20,
            color: colors.primary900,
            fontWeight: '700',
          }}
          selectedIndex={selectedMinuteIndex}
          options={minutes}
          onChange={(index) => setSelectedMinuteIndex(index)}
        />
      </HStack>
    </VStack>
  );
};

export default memo(TimeSelector);
