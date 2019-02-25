import React from 'react';
import { View, Spinner } from 'native-base';

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrap();
  }

  bootstrap = () => {
    global.$storage.load({
      key: 'cookie',
      syncInBackground: false
    }).then(() => {
      this.props.navigation.navigate('App');
    }).catch((e) => {
      console.warn('cookie not found: ', e.message);
      this.props.navigation.navigate('Login');
    });
  };

  render() {
    return (
      <View>
        <Spinner color="#54e69b" />
      </View>
    );
  }
}

export default AuthLoading;