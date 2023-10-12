import { createIcon } from '@gluestack-ui/themed';
import React from 'react';
import { Path } from 'react-native-svg';

export const HeartIcon = createIcon({
  viewBox: '0 0 20 19',
  path: (
    <Path
      d="M10 18.85L8.55 17.53C3.4 12.86 0 9.77 0 6C0 2.91 2.42 0.5 5.5 0.5C7.24 0.5 8.91 1.31 10 2.58C11.09 1.31 12.76 0.5 14.5 0.5C17.58 0.5 20 2.91 20 6C20 9.77 16.6 12.86 11.45 17.53L10 18.85Z"
      fill={'currentColor'}
    />
  ),
});
