import { authAxios } from '../auth/auth.api';

/** 프로필 조회 */
export const fetchUserProfile = async () => {
  const { data } =
    await authAxios.get<ResponseType<UserProfile>>('/users/profile');
  return data.data;
};

/** 프로필 변경 */
export const modifyProfile = async (form: ProfileModifyRequestFormType) => {
  const formData = new FormData();
  Object.entries(form).forEach(([key, value]) => {
    if (!value) {
      return;
    }
    formData.append(key, value);
  });
  const { data } = await authAxios.patch<ResponseType<{}>>(
    '/users/profile',
    formData,
  );
  return data.data;
};

/** FCM 토큰 전송 */
export const sendFcmToken = async (fcmToken: string) => {
  const { data } = await authAxios.post<ResponseType<{}>>(
    '/users/deviceToken',
    {
      deviceToken: fcmToken,
    },
  );
  return data.data;
};

/** 알람 조회 */
export const fetchUserAlarm = async () => {
  const { data } =
    await authAxios.get<ResponseType<AlarmListItem[]>>('/users/alarms');
  return data.data;
};

/** 알람 허용 */
export const enableAlarm = async (status: boolean) => {
  const { data } = await authAxios.patch<ResponseType<{}>>(
    '/users/alarms/setting',
    null,
    {
      params: {
        status,
      },
    },
  );
  return data.data;
};

/** 알람 시간대 추가 */
export const appendAlarm = async (alarmTime: string) => {
  const { data } = await authAxios.post('/users/alarms', null, {
    params: {
      alarmTime,
    },
  });
  return data.data;
};

/** 알람 시간대 변경 */
export const modifyAlarm = async ({
  alarmId,
  time,
}: {
  alarmId: number;
  time: string;
}) => {
  const { data } = await authAxios.patch(`/users/alarms/${alarmId}`, {
    alarmTime: time,
  });
  return data.data;
};

/** 알람 삭제 */
export const removeAlarm = async (alarmId: number) => {
  const { data } = await authAxios.delete(`/users/alarms/${alarmId}`);
  return data.data;
};
