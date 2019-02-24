import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon, View } from 'native-base';

import { px2Dp } from '../utils';
import ReviewPage from '../views/App/Home/Review';
import ListPage from '../views/App/Home/List';
import CheckPage from '../views/App/Home/Check';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Review: {
      screen: ReviewPage,
      navigationOptions: {
        tabBarLabel: '资料审核',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-checkbox" style={{ color: tintColor }} />
        )
      }
    },
    List: {
      screen: ListPage,
      navigationOptions: {
        tabBarLabel: '企业列表',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bars" type="AntDesign" style={{ color: tintColor }} />
        )
      }
    },
    Check: {
      screen: CheckPage,
      navigationOptions: {
        tabBarLabel: '企业检查',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="form" type="AntDesign" style={{ color: tintColor, fontSize: 23 }} />
        )
      }
    }
  },
  {
    initialRouteName: 'Review',
    tabBarOptions: {
      activeTintColor: '#01B6AF'
    }
  }
);

BottomTabNavigator.navigationOptions = ({ navigation }) => {
  let headerTitle = '';
  const { routeName } = navigation.state.routes[navigation.state.index];

  if (routeName == 'Review') {
    headerTitle = '资料审核'
  }
  else if(routeName == 'List') {
    headerTitle = '企业列表'
  }
  else if(routeName == 'Check') {
    headerTitle = '企业检查'
  }

  return {
    headerTitle,
    headerLeft: (
      <View style={{ paddingLeft: px2Dp(16) }}>
        <Icon name="user" type="AntDesign" style={{ color: '#CCCCCC' }} onPress={ () => { navigation.navigate('My') } } />
      </View>
    ),
    headerRight: (
      <View style={{ paddingRight: px2Dp(16) }}>
        <Icon name="search1" type="AntDesign" style={{ color: '#CCCCCC' }} />
      </View>
    ),
    headerTitleStyle: {
      flex: 1, 
      textAlign: 'center',
      fontSize: 18
    }
  };
};

export default BottomTabNavigator;