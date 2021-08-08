import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay, map } from 'rxjs/operators';
import { TotalMsDto } from './dtos';

class _TimerDao {
  private static instance: _TimerDao;

  private constructor() { }

  static getInstance() {
    return _TimerDao.instance || (_TimerDao.instance = new _TimerDao());
  }

  getTotalMs(): Observable<TotalMsDto> {
    return ajax('http://google.com').pipe(
      delay(2000),
      map((data) => {
        console.log(data);
        return {
          totalMs: 3500 * 1000
        }
      })
    )
  }

  updateTotalMs(ms: number) {
    return ajax('http://google.com').pipe(
      delay(2000),
      map((data) => {
        console.log(data);
        return {
          totalMs: 3500 * 1000 + ms
        }
      })
    )
  }

}

export const TimerDao = _TimerDao.getInstance();
