import { ButtonIcon, HStack } from '@gluestack-ui/themed';
import { useRef } from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { CrossIcon } from '~/components/Icon/CrossIcon';
import { RightShareIcon } from '~/components/Icon/ShareIcon';
import SafeView from '~/components/SafeView';
import { RootStackScreenProps } from '~/navigations/RootStackNavigator';
import { colors } from '~/theme';
import { useMyToast } from '~/utils/useToast';

type WebViewNavigatorPropType = {
  onClickClose?: () => void;
  onClickShare?: () => void;
};

const WebViewNavigator = ({
  onClickClose,
  onClickShare,
}: WebViewNavigatorPropType) => {
  return (
    <HStack
      alignItems="center"
      justifyContent="flex-end"
      paddingHorizontal={16}
      paddingVertical={5}
      gap={20}
    >
      <TouchableOpacity onPress={onClickShare}>
        <ButtonIcon size={'xl'} as={RightShareIcon} color={colors.grey900} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onClickClose}>
        <ButtonIcon size={'lg'} as={CrossIcon} color={colors.grey900} />
      </TouchableOpacity>
    </HStack>
  );
};

export const MyWebView = ({
  route,
  navigation,
}: RootStackScreenProps<'WebView'>) => {
  const params = route.params;
  const { showToast } = useMyToast();
  const webviewRef = useRef(null);
  const webViewState = useRef<WebViewNavigation>();

  const onClickClose = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
    navigation.navigate('Main', {
      screen: 'Home',
    });
  };

  const onClickShare = () => {
    if (!webViewState.current?.url) {
      showToast('error', '해당 URL을 열 수 없습니다.');
      return;
    }
    try {
      Linking.openURL(webViewState.current?.url);
    } catch (error) {
      showToast('error', '해당 URL을 열 수 없습니다.');
    }
  };

  return (
    <SafeView top bottom>
      <WebViewNavigator
        onClickClose={onClickClose}
        onClickShare={onClickShare}
      />
      <WebView
        ref={webviewRef}
        source={{ uri: params.uri }}
        onNavigationStateChange={(state) => (webViewState.current = state)}
      />
    </SafeView>
  );
};
