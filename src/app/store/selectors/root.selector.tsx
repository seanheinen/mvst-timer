import { createSelector } from '@reduxjs/toolkit';
import { ROOT, RootSlice } from '../models';

interface RootState {
  [key: string]: any;
}

// Required for type inference slices of this feature slice
const getRootSlice = createSelector<RootState, RootSlice, RootSlice>((state) => {
  return state[ROOT];
}, (rootState) => rootState);

export const getTheme = createSelector(
  getRootSlice,
  (rootSlice) => rootSlice.theme
);
