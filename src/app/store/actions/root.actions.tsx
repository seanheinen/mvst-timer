import { createAction } from '@reduxjs/toolkit';
import { Theme } from 'app/models';

export const setTheme = createAction(
  'cx/action/root/theme/set',
  (theme: Theme) => ({ payload: theme })
);
