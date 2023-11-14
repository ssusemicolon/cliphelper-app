import Toast from 'react-native-toast-message';

export const useMyToast = () => {
  const showToast = (
    type: 'success' | 'info' | 'error',
    title: string,
    description: string = '',
  ) => {
    Toast.show({
      type,
      text1: title,
      text2: description,
    });
  };

  return { showToast };
};
