import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon, View } from 'native-base';

import { px2Dp } from '../utils';
import MyPage from '../views/App/My';
import MessagePage from '../views/App/My/Message';
import NoticePage from '../views/App/My/Message/Notice';

const MessageStackNavigator = createStackNavigator(
  {
    MessageIn: {
      screen: MessagePage,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '消息',
        headerLeft: (
          <View style={{ paddingLeft: px2Dp(16) }}>
            <Icon name="arrowleft" type="AntDesign" style={{ color: '#CCCCCC' }} onPress={ () => { navigation.goBack(null) } } />
          </View>
        ),
        headerRight: (
          <View style={{ paddingRight: px2Dp(16) }}>
            <Icon name="bells" type="AntDesign" style={{ color: '#CCCCCC' }} onPress={ () => { navigation.navigate('Notice') } } />
          </View>
        ),
        headerTitleStyle: {
          flex: 1, 
          textAlign: 'center',
          fontSize: 18
        }
      })
    },
    Notice: {
      screen: NoticePage,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '设置',
        headerLeft: (
          <View style={{ paddingLeft: px2Dp(16) }}>
            <Icon name="arrowleft" type="AntDesign" style={{ color: '#CCCCCC' }} onPress={ () => { navigation.goBack(null) } } />
          </View>
        ),
        headerRight: (
          <View style={{ paddingRight: px2Dp(16) }}></View>
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
    initialRouteName: 'MessageIn'
  }
);

const MyStackNavigator = createStackNavigator(
  {
    MyIn: {
      screen: MyPage,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '我的',
        headerLeft: (
          <View style={{ paddingLeft: px2Dp(16) }}>
            <Icon name="arrowleft" type="AntDesign" style={{ color: '#CCCCCC' }} onPress={ () => { navigation.navigate('Home') } } />
          </View>
        ),
        headerRight: (
          <View style={{ paddingRight: px2Dp(16) }}></View>
        ),
        headerTitleStyle: {
          flex: 1, 
          textAlign: 'center',
          fontSize: 18
        }
      })
    },
    Message: {
      screen: MessageStackNavigator,
      navigationOptions: {
        header: null
      }
    }
  },  
  {
    initialRouteName: 'MyIn',
  }
);

export default MyStackNavigator;