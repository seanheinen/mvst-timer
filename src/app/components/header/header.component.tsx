import React from 'react';
import logo from 'app/assets/logo.svg';
import './header.component.scss';
import * as Icon from '@material-ui/icons';
import * as UI from 'app/ui';
import { useDispatch, useSelector } from 'react-redux';
import { RootSelector, RootAction } from 'app/store';
import { Theme } from 'app/models';

export const HeaderComponent: React.FunctionComponent = () => {

  const theme = useSelector(RootSelector.getTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(RootAction.setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark));
  }

  return (
    <header>
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div>
        <Icon.NightsStay />
        <UI.Switch value={theme === Theme.Dark} onChange={toggleTheme} />
        <Icon.Brightness7 />
      </div>
    </header>
  );

};
