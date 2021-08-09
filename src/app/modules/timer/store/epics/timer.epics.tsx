import { Epic } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { TimerDao } from '../../dao';
import { TimerAction } from '../actions';

export const getTotalMsEpic: Epic = (action$) => action$.pipe(
  // ofType doesn't perform type inference very well, so use filter instead
  // ofType(TimerAction.update.match),
  filter(TimerAction.get.match),
  mergeMap(() => TimerDao.getTotalMs().pipe(
    map((response) => TimerAction.set(response.totalMs)),
    catchError((error) => {
      console.error(error);
      // Swallow error
      return EMPTY;
    })
  )),
);

export const setTotalMsEpic: Epic = (action$) => action$.pipe(
  filter(TimerAction.update.match),
  mergeMap((action) => TimerDao.updateTotalMs(action.payload).pipe(
    map((response) => TimerAction.set(response.totalMs)),
    catchError((error) => {
      console.error(error);
      // Swallow error
      return EMPTY;
    })
  )),
);
