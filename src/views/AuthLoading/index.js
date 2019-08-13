import React from 'react';
import { View } from 'native-base';

class AuthLoading extends React.Component {
  constructor (props) {
    super(props);
    this.bootstrap();
  }

  bootstrap = async () => {
    try {
      let data = await global.$storage.load({
        key: 'cookie',
        syncInBackground: false
      });

      await global.$storage.save({
        key: 'cookie',
        data
      });

      this.props.navigation.navigate('App');
    }
    catch(e) {
      console.warn(`cookie not found: ${e.message}`);
      this.props.navigation.navigate('Login');
    }
  };

  render () {
    return (
      <View></View>
    );
  }
}

export default AuthLoading;