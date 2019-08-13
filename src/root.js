import React from 'react';
import Toast from 'react-native-root-toast';

import Storage from './config/storage';
import Router from './routes';
import Request from './config/request';
import NavigationService from './service/navigationService';

global.$storage = Storage;
global.$http = Request;
global.$toast = {};
global.$toast.show = (message, position) => {
  let defaultToastPosition = Toast.positions.TOP;

  if (position === 'bottom') {
    defaultToastPosition = Toast.positions.BOTTOM;
  }

  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: defaultToastPosition
  });
}

export default () => (
  <Router ref={ navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef) } } />
);