import {ThemeProvider} from '@vktrwlt/stylex-library.provider';
import { Button } from './button';

export const BasicButton = () => {
  return (
    <ThemeProvider>
      <Button>hello world!</Button>
    </ThemeProvider>
  );
};