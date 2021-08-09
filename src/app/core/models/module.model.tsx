import { Reducer } from '@reduxjs/toolkit';
import { RouteProps } from 'react-router-dom';
import { Epic } from 'redux-observable';

export interface StoreConfig {
  name: string;
  reducer: Reducer;
  epic?: Epic;
}

export interface Module {
  routeProps: RouteProps;
  name: string;
  store: StoreConfig;
}
