import React from 'react';
import i18next from 'i18next';
import Routes from '@constants/routes';
import { blue, white } from '@constants/colors';
import statusBarConfig from '@constants/statusBar';

import '@app/i18n';
import fonts from './fonts';

// Default nav options for all screens
const defaultNavOptions = ({ navigation }) => {
  console.tron.log(navigation.state.routeName);
  return {
    // Change screen title from i18n traslates files
    headerTitle: i18next.t(`app:${navigation.state.routeName}`),
    // TODO: The following options are examples. Change them to your need
    headerStyle: {
      backgroundColor: blue
    },
    headerBackTitleStyle: {
      color: white
    },
    headerTitleStyle: {
      ...fonts.baseFont,
      color: white,
      textAlign: 'center',
      flex: 1
    },
    headerTintColor: white
  };
};

export const mainSwitchNavConfig = {
  initialRouteName: Routes.App
};

export const appStackNavConfig = {
  defaultNavigationOptions: defaultNavOptions,
  initialRouteName: Routes.Home
};

// Default nav options for all screens
export const appScreensNavOptions = {
  // TODO: Add here the screens nav options that changes with respect to
  // the default ones defined in defaultNavOptions, for example...
  /*
  [Routes.Home]: {
    headerTitle: 'Home'
  }
  */
};

export const statusBarStyles = {
  // TODO: Change these styles to customize the status bar
  [Routes.Home]: statusBarConfig.blueStatusBar,
  default: statusBarConfig.transparentStatusBar
};
