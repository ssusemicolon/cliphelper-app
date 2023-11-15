/* eslint-disable react-native/no-inline-styles */
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { colors } from '~/theme';

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: colors.secondary900,
        backgroundColor: colors.secondary900,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '700',
        color: colors.grey100,
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: '400',
        color: colors.grey100,
      }}
    />
  ),
  info: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: colors.primary900,
        backgroundColor: colors.primary900,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: '700',
        color: colors.grey100,
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: '400',
        color: colors.grey100,
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: colors.focus300,
        backgroundColor: colors.focus300,
      }}
      text1Style={{
        fontSize: 18,
        fontWeight: '700',
        color: colors.grey100,
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: '400',
        color: colors.grey100,
      }}
    />
  ),
};
