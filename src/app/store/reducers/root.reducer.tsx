import { createReducer } from '@reduxjs/toolkit';
import { Theme } from 'app/models';
import { RootAction } from '../actions';
import { RootSlice } from '../models';

const initialState: RootSlice = {
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.Dark
    : Theme.Light,
}

export const rootReducer = createReducer(initialState, (builder) => {

  builder.addCase(RootAction.setTheme, (_0, action) => ({ theme: action.payload }));

});
