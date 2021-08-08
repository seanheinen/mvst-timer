import { createAction } from '@reduxjs/toolkit';

export const get = createAction('cx/action/timer/get');

export const success = createAction(
  'cx/action/timer/set',
  (ms: number) => ({ payload: ms })
);

export const update = createAction(
  'cx/action/timer/set',
  (ms: number) => ({ payload: ms })
);
