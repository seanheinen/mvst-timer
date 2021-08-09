import { createAction } from '@reduxjs/toolkit';

export const get = createAction('cx/action/timer/get');

export const set = createAction(
  'cx/action/timer/set',
  (ms: number) => ({ payload: ms })
);

export const update = createAction(
  'cx/action/timer/update',
  (ms: number) => ({ payload: ms })
);
