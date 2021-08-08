import { applyMiddleware, combineReducers, configureStore, ReducersMapObject, Store } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { StoreConfig } from '../models';

class _StoreService {

  private static instance: _StoreService;

  private readonly store: Store;
  private readonly reducerMap: ReducersMapObject = {};

  private readonly epicMiddleware = createEpicMiddleware();

  private constructor() {

    this.store = configureStore({
      reducer: state => state,
      enhancers: [applyMiddleware(this.epicMiddleware)],
      devTools: true // TODO Make configurable
    });
  }

  static getInstance() {
    return _StoreService.instance || (_StoreService.instance = new _StoreService());
  }

  public getStore() {
    return this.store;
  }

  public addFeatureSlice(config: StoreConfig) {
    this.reducerMap[config.name] = config.reducer;
    this.store.replaceReducer(combineReducers(this.reducerMap));

    !!config.epic && this.epicMiddleware.run(config.epic);
  }

}

export const StoreService = _StoreService.getInstance();
