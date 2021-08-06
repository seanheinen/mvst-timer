import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import logo from './assets/logo.svg';
import './app.component.scss';
import * as UI from 'app/ui';
import { Grid } from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import * as Module from 'app/modules';

interface State {
  darkTheme: boolean;
}

export class App extends React.Component<{}, State> {

  state = {
    darkTheme: false
  }

  componentDidMount() {
    // default to system theme
    const systemIsDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setState({
      darkTheme: systemIsDarkTheme
    });
  }

  toggleTheme = () => {
    this.setState({
      darkTheme: !this.state.darkTheme
    });
  }

  render() {
    return (

      <div className={`mvst-app theme-${this.state.darkTheme ? 'dark' : 'light'}`}>
        <header>

          <Grid container>
            <Grid item xs={6} justifyContent="flex-start">
              <img src={logo} className="logo" alt="logo" />
            </Grid>
            <Grid item xs={6} justifyContent="flex-end">

              <Icon.Brightness3 />
              <UI.Switch value={this.state.darkTheme} onChange={this.toggleTheme} />
              <Icon.Brightness7 />

            </Grid>
          </Grid>
        </header>

        <BrowserRouter>

          <Route path="/">
            <Redirect to="/timer" />
          </Route>

          <Route path="/timer">
            <Module.TimerComponent />
          </Route>

        </BrowserRouter>

      </div>

    );
  }

}
