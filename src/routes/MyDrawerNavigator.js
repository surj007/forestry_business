import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { Icon, View } from 'native-base';

import { px2Dp } from '../utils';
import MyPage from '../views/App/My';
import MessagePage from '../views/App/My/Message';

const MyDrawerNavigator = createDrawerNavigator(
  {
    MyIn: {  
      screen: MyPage
    }
  },  
  {  
    initialRouteName: 'MyIn',  
    contentComponent: MessagePage,
    drawerWidth: 200
  }
);

MyDrawerNavigator.navigationOptions = ({ navigation }) => {
  let headerTitle = '';
  const { routeName } = navigation.state.routes[navigation.state.index];

  if(routeName == 'MyIn') {
    headerTitle = '我的'
  }

  return {
    headerTitle,
    headerLeft: (
      <View style={{ paddingLeft: px2Dp(16) }}>
        <Icon name="arrowleft" type="AntDesign" style={{ color: '#CCCCCC' }} onPress={ () => { navigation.goBack() } } />
      </View>
    ),
    headerRight: (
      <View style={{ paddingLeft: px2Dp(16) }}></View>
    ),
    headerTitleStyle: {
      flex: 1, 
      textAlign: 'center',
      fontSize: 18
    }
  };
};

export default MyDrawerNavigator;