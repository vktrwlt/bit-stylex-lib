import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import { orgTheme } from '@vktrwlt/stylex-library.theme';


export type ThemeProviderProps = { children: ReactNode }

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <div {...stylex.props(orgTheme)}>{children}</div>;
};