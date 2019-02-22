import React from 'react';

import storage from './config/storage';
import App from './App';
import request from './config/request';
import navigationService from './service/navigationService';

global.$storage = storage;
global.$http = request;

export default () => (
  <App ref={ (navigatorRef) => { navigationService.setTopLevelNavigator(navigatorRef) } } />
);