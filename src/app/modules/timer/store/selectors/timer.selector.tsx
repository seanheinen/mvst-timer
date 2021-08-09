import { createSelector } from '@reduxjs/toolkit';
import { TimerSlice, TIMER_FEATURE } from '../models';

interface RootState {
  [key: string]: any;
}

// Required for type inference slices of this feature slice
const getTimerSlice = createSelector<RootState, TimerSlice, TimerSlice>((state) => {
  return state[TIMER_FEATURE];
}, (timerSlice) => timerSlice);


export const getTotalMs = createSelector(
  getTimerSlice,
  (state) => state.totalMs
);