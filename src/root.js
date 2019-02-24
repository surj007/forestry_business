import React from 'react';
import Toast from 'react-native-root-toast';

import storage from './config/storage';
import Router from './routes';
import request from './config/request';
import navigationService from './service/navigationService';

global.$storage = storage;
global.$http = request;
global.$toast = {};
global.$toast.show = (message, position) => {
  let p = Toast.positions.TOP;
  if(position == 'bottom') {
    p = Toast.positions.BOTTOM;
  }
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: p
  });
}

export default () => (
  <Router ref={ (navigatorRef) => { navigationService.setTopLevelNavigator(navigatorRef) } } />
);