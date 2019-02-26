import React from 'react';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import { Icon, View } from 'native-base';

import { px2Dp } from '../utils';
import ReviewPage from '../views/App/Home/Review';
import ListPage from '../views/App/Home/List';
import CheckPage from '../views/App/Home/Check';
import ReviewContentStackNavigator from './ReviewContentStackNavigator';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Review: {
      screen: createStackNavigator(
        {
          ReviewIn: {
            screen: ReviewPage,
            navigationOptions:  ({ navigation }) => ({
              headerTitle: '资料审核',
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
            })
          },
          ReviewContent: {
            screen: ReviewContentStackNavigator,
            navigationOptions: {
              header: null
            }
          }
        },
        {
          initialRouteName: 'ReviewIn',
        }
      ),
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = false;
        if(navigation.state.routes[navigation.state.index].routeName == 'ReviewIn') {
          tabBarVisible = true;
        }
        return {
          tabBarVisible,
          tabBarLabel: '资料审核',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-checkbox" style={{ color: tintColor }} />
          )
        }
      }
    },
    List: {
      screen: createStackNavigator(
        {
          ListIn: {
            screen: ListPage,
            navigationOptions:  ({ navigation }) => ({
              headerTitle: '企业列表',
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
            })
          }
        },
        {
          initialRouteName: 'ListIn',
        }
      ),
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = false;
        if(navigation.state.routes[navigation.state.index].routeName == 'ListIn') {
          tabBarVisible = true;
        }
        return {
          tabBarVisible,
          tabBarLabel: '企业列表',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="bars" type="AntDesign" style={{ color: tintColor }} />
          )
        }
      }
    },
    Check: {
      screen: createStackNavigator(
        {
          CheckIn: {
            screen: CheckPage,
            navigationOptions:  ({ navigation }) => ({
              headerTitle: '企业检查',
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
            })
          }
        },
        {
          initialRouteName: 'CheckIn',
        }
      ),
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = false;
        if(navigation.state.routes[navigation.state.index].routeName == 'CheckIn') {
          tabBarVisible = true;
        }
        return {
          tabBarVisible,
          tabBarLabel: '企业检查',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="form" type="AntDesign" style={{ color: tintColor, fontSize: 23 }} />
          )
        }
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

export default BottomTabNavigator;