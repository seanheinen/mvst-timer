import React from 'react';
import './header.component.scss';
import * as Mat from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootSelector, RootAction } from 'app/store';
import { Theme } from 'app/models';
import { Logo } from 'app/icons';

export const HeaderComponent: React.FunctionComponent = () => {

  const theme = useSelector(RootSelector.getTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(RootAction.setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark));
  }

  return (
    <header>
      <div>
        <Logo></Logo>
      </div>
      <div>
        <Icon.NightsStay />
        <Mat.Switch value={theme === Theme.Dark} onChange={toggleTheme} />
        <Icon.Brightness7 />
      </div>
    </header>
  );

};
