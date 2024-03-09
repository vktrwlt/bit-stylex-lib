import { type ReactNode, type HTMLAttributes } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { tokens } from './tokens.stylex';

const styles = stylex.create({
  button: {
    color: tokens.primaryColor,
  },
});

export type ButtonProps = {
  children?: ReactNode;
  style?: StyleXStyles;
};

export function Button({ children, style }: ButtonProps) {
  return (
    <button type="button" {...stylex.props(styles.button, style)}>
      {children}
    </button>
  );
}