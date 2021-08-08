import { combineEpics } from 'redux-observable';
import { getTotalMsEpic } from './timer.epics';

export const timerEpic = combineEpics(
  getTotalMsEpic,
  // ... Add new epics here
);