import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Icon } from 'native-base';

import InvokeCompanyPage from '../views/App/Home/Review/InvokeCompany';
import { px2Dp } from '../utils';

const ReviewContentStackNavigator = createStackNavigator(
  {
    InvokeCompany: {
      screen: InvokeCompanyPage,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '新企业注册',
        headerLeft: (
          <View style={{ paddingLeft: px2Dp(16) }}>
            <Icon name="arrowleft" type="AntDesign" style={{ color: '#CCCCCC' }} onPress={ () => { navigation.goBack(null) } } />
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
  }
);

export default ReviewContentStackNavigator;