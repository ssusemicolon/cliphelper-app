import { GluestackUIProvider } from '@gluestack-ui/themed';
import React, { PropsWithChildren } from 'react';
import { config } from './config/gluestack-ui.config';

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
};
