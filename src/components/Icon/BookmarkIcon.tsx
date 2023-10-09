import { createIcon } from '@gluestack-ui/themed';
import React from 'react';
import { Path } from 'react-native-svg';

export const BookmarkIcon = createIcon({
  viewBox: '0 0 21 28',
  path: (
    <>
      <Path
        d="M0.291656 27.125V3.79167C0.291656 2.98958 0.57749 2.30271 1.14916 1.73104C1.72082 1.15937 2.40721 0.874026 3.20832 0.874999H17.7917C18.5937 0.874999 19.2806 1.16083 19.8523 1.7325C20.4239 2.30417 20.7093 2.99055 20.7083 3.79167V27.125L10.5 22.75L0.291656 27.125ZM3.20832 22.6771L10.5 19.5417L17.7917 22.6771V3.79167H3.20832V22.6771Z"
        fill={'currentColor'}
      />
    </>
  ),
});
