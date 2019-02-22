import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './views/Login';
import Home from './views/Home';
import AuthLoading from './views/AuthLoading';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    AuthLoading
  },
  {
    initialRouteName: 'AuthLoading'
  }
));