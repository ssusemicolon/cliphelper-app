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

export const FilledBookmarkIcon = createIcon({
  viewBox: '0 0 21 27',
  path: (
    <>
      <Path
        d="M0.291664 26.625V3.29167C0.291664 2.48959 0.577497 1.80271 1.14916 1.23104C1.72083 0.659377 2.40722 0.37403 3.20833 0.375002H17.7917C18.5937 0.375002 19.2806 0.660836 19.8523 1.2325C20.424 1.80417 20.7093 2.49056 20.7083 3.29167V26.625L10.5 22.25L0.291664 26.625Z"
        fill={'currentColor'}
      />
    </>
  ),
});
