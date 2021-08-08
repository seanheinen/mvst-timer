import { createReducer } from '@reduxjs/toolkit';
import { TimerAction } from '../actions';
import { TimerSlice } from '../models';

const initialState: TimerSlice = {
  totalMs: 0
};

export const timerReducer = createReducer(initialState, (builder) => {

  builder.addCase(TimerAction.success, (_0, action) => ({
    totalMs: action.payload
  }));

});
