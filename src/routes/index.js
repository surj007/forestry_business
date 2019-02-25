import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingPage from '../views/AuthLoading';
import LoginPage from '../views/Login';
import BottomTabNavigator from './BottomTabNavigator';
import MyStackNavigator from './MyStackNavigator';

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: BottomTabNavigator
    },
    My: {
      screen: MyStackNavigator
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    App: AppStackNavigator,
    Login: {
      screen: LoginPage,
      navigationOptions: {
        header: null
      }
    },
    AuthLoading: AuthLoadingPage
  },
  {
    initialRouteName: 'AuthLoading'
  }
));