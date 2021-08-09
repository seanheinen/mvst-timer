import { combineEpics } from 'redux-observable';
import { getTotalMsEpic, setTotalMsEpic } from './timer.epics';

export const timerEpic = combineEpics(
  getTotalMsEpic,
  setTotalMsEpic,
  // ... Add new epics here
);