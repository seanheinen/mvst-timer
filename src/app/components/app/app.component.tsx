import './app.component.scss';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { modules } from 'app/modules';
import { StoreService } from 'app/core/services';
import { useSelector } from 'react-redux';
import { HeaderComponent } from '../header/header.component';
import { Theme } from 'app/models';
import { ROOT, rootReducer, RootSelector } from 'app/store';

// Initialise root slice
StoreService.addFeatureSlice({
  name: ROOT,
  reducer: rootReducer,
});

// Initialise feature store slices
modules.forEach((module) => {
  StoreService.addFeatureSlice(module.store);
});

export const App: React.FunctionComponent = () => {

  // Subscribe to redux root slice
  const theme = useSelector(RootSelector.getTheme);
  
  return (

    <div className={`mvst-app theme-${theme === Theme.Dark ? 'dark' : 'light'}`}>

      <HeaderComponent></HeaderComponent>

      <BrowserRouter>
        <Switch>

          {/* Default path is /timer */}
          <Route exact path="/">
            <Redirect to="/timer" />
          </Route>

          {/* Load modules dynamically */}
          {modules.map((module, index) => {
            return <Route exact {...module.routeProps} key={index}></Route>;
          })}

        </Switch>
      </BrowserRouter>

    </div>

  )

};
