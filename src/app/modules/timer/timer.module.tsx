import { Module } from 'app/core/models';
import { TimerComponent } from './components';
import { timerEpic } from './store/epics';
import { TIMER_FEATURE } from './store/models';
import { timerReducer } from './store/reducers';

export const TimerModule: Module = {
  name: 'TimerModule',
  routeProps: {
    path: '/timer',
    component: TimerComponent,
  },
  store: {
    name: TIMER_FEATURE,
    reducer: timerReducer,
    epic: timerEpic,
  }
};
