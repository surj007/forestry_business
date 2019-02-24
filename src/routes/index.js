import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingPage from '../views/AuthLoading';
import LoginPage from '../views/Login';
import BottomTabNavigator from './BottomTabNavigator';
import MyDrawerNavigator from './MyDrawerNavigator';

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: BottomTabNavigator
    },
    My: {
      screen: MyDrawerNavigator
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AuthStackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginPage
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
);

const AuthLoadingStackNavigator = createStackNavigator(
  {
    AuthLoadingIn: {
      screen: AuthLoadingPage
    }
  },
  {
    initialRouteName: 'AuthLoadingIn'
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    App: AppStackNavigator,
    Auth: AuthStackNavigator,
    AuthLoading: AuthLoadingStackNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
));