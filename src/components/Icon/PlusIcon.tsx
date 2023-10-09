import { createIcon } from '@gluestack-ui/themed';
import React from 'react';
import { Path } from 'react-native-svg';

export const RoundedPlusIcon = createIcon({
  viewBox: '0 0 30 30',
  path: (
    <>
      <Path
        d="M15 3C21.6165 3 27 8.3835 27 15C27 21.6165 21.6165 27 15 27C8.3835 27 3 21.6165 3 15C3 8.3835 8.3835 3 15 3ZM15 0C6.7155 0 0 6.7155 0 15C0 23.2845 6.7155 30 15 30C23.2845 30 30 23.2845 30 15C30 6.7155 23.2845 0 15 0ZM22.5 13.5H16.5V7.5H13.5V13.5H7.5V16.5H13.5V22.5H16.5V16.5H22.5V13.5Z"
        fill={'currentColor'}
      />
    </>
  ),
});
