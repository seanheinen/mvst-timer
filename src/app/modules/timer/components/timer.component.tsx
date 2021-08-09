import './timer.component.scss';
import React from 'react';
import * as Mat from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import { Subscription, timer } from 'rxjs';
import { useDispatch, useSelector } from 'react-redux';
import { TimerAction, TimerSelector } from '../store';

interface State {
  totalTimeMs: number;
  currentTimeMs: number;
  subscription?: Subscription;
}

function formatTime(secondsElapsed: number) {
  const seconds = Math.floor(secondsElapsed % 60);
  const minutes = Math.floor((secondsElapsed / 60) % 60);
  const hours = Math.floor((secondsElapsed / (60 * 60)) % 24);
  function pad(unit: number): string {
    return unit < 10 ? `0${unit}` : unit.toString();
  }
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export const TimerComponent: React.FunctionComponent = () => {

  const [state, setState] = React.useState<State>({
    totalTimeMs: 0,
    currentTimeMs: 0,
    subscription: undefined
  });

  const totalMs = useSelector(TimerSelector.getTotalMs);
  const dispatch = useDispatch();



  React.useEffect(() => {
    // Retrieve total ms from remote API
    dispatch(TimerAction.get());
    // Teardown subscription when component is destroyed
    return !!state.subscription ? state.subscription.unsubscribe : undefined;
    // TODO Figure out elegant alternative (https://github.com/facebook/create-react-app/issues/6880)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickTimer = () => {

    if (state.subscription !== undefined) {

      dispatch(TimerAction.update(state.currentTimeMs));

      state.subscription.unsubscribe();
      setState({
        ...state,
        currentTimeMs: 0,
        subscription: undefined,
      })
      return;
    }

    const subscription = timer(0, 1000).subscribe((currentTimeMs) => {
      setState({
        ...state,
        currentTimeMs,
        subscription,
      });
    });

  }

  return (
    <div className="timer-container">

      <Mat.Typography variant='h3' style={{ fontWeight: 'bold', marginBottom: '1em' }}>{formatTime(totalMs)}</Mat.Typography>
      <Mat.Button variant="contained" onClick={clickTimer} startIcon={
        state.subscription === undefined
          ? <Icon.PlayArrow />
          : <Icon.Stop />
      }>
        {formatTime(state.currentTimeMs)}
      </Mat.Button>

    </div>
  );
};
