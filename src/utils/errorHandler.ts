import { isAxiosError } from 'axios';
import Toast from 'react-native-toast-message';

export const errorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    Toast.show({
      type: 'error',
      text1: `${error.response?.status || error} 에러가 발생했어요`,
      text2: error.response?.data.message,
    });
    return;
  }

  Toast.show({
    type: 'error',
    text1: '오류가 발생했어요',
    text2: error + '',
  });
};
