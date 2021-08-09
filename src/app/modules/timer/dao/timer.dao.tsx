import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { delay, map } from 'rxjs/operators';
import { TotalMsDto } from './dtos';

class _TimerDao {

  private static instance: _TimerDao;

  private readonly endpoint = 'http://localhost:3001/timer';

  private constructor() { }

  static getInstance() {
    return _TimerDao.instance || (_TimerDao.instance = new _TimerDao());
  }

  getTotalMs(): Observable<TotalMsDto> {
    return ajax<TotalMsDto>(`${this.endpoint}`).pipe(
      map(this.handleAjaxResponse.bind(this))
    )
  }

  updateTotalMs(totalMs: number): Observable<TotalMsDto> {
    return ajax.put<TotalMsDto>(`${this.endpoint}`, {
      totalMs
    }).pipe(
      map(this.handleAjaxResponse.bind(this))
    )
  }

  private handleAjaxResponse<T>(ajaxResponse: AjaxResponse<T>): T {
    if (ajaxResponse.status >= 200 && ajaxResponse.status < 300) {
      return ajaxResponse.response;
    }
    throw ajaxResponse.response;;
  }

}

export const TimerDao = _TimerDao.getInstance();
