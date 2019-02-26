import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, View, Button, Text, Item, Input, Icon } from 'native-base';
import { Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import logo from '../../assets/img/logo.png';
import { px2Dp } from '../../utils';

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordType: true,
    error: {
      usernameError: false,
      passwordError: false
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  submit = async () => {
    let errorFlag = false;
    if(this.state.username == '') {
      this.setState({error: Object.assign(this.state.error, {usernameError: true})});
      errorFlag = true;
    }
    if(this.state.password == '') {
      this.setState({error: Object.assign(this.state.error, {passwordError: true})});
      errorFlag = true;
    }
    if(errorFlag) {
      global.$toast.show('用户名和密码不能为空');
      return;
    }

    global.$http({
      url: '/auth/login',
      method: 'POST',
      data: {
        username: this.state.username,
        password: this.state.password
      }
    }).then((res) => {
      if(res.code == 0) {
        this.props.navigation.navigate('Home');
      }
    });
    
  }

  handleInputChange = (value, key) => {
    let data = {};
    data[key] = value;
    this.setState(data);

    let tmp = {};
    if(value != '') {
      tmp[key + 'Error'] = false;
      this.setState({error: Object.assign(this.state.error, tmp)});
    }
    else {
      tmp[key + 'Error'] = true;
      this.setState({error: Object.assign(this.state.error, tmp)});
    }
  }

  togglePasswordType = () => {
    this.setState({passwordType: !this.state.passwordType});
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={ styles.content }>
            <Image style={ styles.logo } source={ logo } />

            <View style={ styles.innerContent }>
              <Item style={ styles.input } error={ this.state.error.usernameError }>
                <Icon active={ this.state.error.usernameError } name="person" style={ styles.icon } />

                <Input placeholder="请输入用户名" placeholderTextColor="#CCCCCC" error="blue"
                onChangeText={ (value) => { this.handleInputChange(value, 'username') } } value={ this.state.username } />
              </Item>

              <Item error={ this.state.error.passwordError }>
                <Icon active={ this.state.error.passwordError } name="ios-lock" style={ styles.icon } />

                <Input placeholder="请输入密码" placeholderTextColor="#CCCCCC" secureTextEntry={ this.state.passwordType }
                onChangeText={ (value) => { this.handleInputChange(value, 'password') } } value={ this.state.password } />

                <Icon name={ this.state.passwordType ? 'ios-eye' : 'ios-eye-off' } style={ styles.icon } onPress={ this.togglePasswordType } />
              </Item>

              <Button full rounded success style={ styles.btn } onPress={ this.submit }>
                <Text>登陆</Text>
              </Button>
            </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: px2Dp(144),
    height: px2Dp(132),
    marginTop: px2Dp(55),
    marginBottom: px2Dp(30)
  },
  innerContent: {
    width: '100%',
    paddingLeft: px2Dp(20),
    paddingRight: px2Dp(20)
  },
  icon: {
    fontSize: 20
  },
  input: {
    marginBottom: px2Dp(20)
  },
  btn: {
    marginTop: px2Dp(125),
    backgroundColor: '#54e69b',
    height: px2Dp(40)
  }
});

export default Login;