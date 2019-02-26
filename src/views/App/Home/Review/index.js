import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import { px2Dp } from '../../../../utils';
import background1 from '../../../../assets/img/background1.png';
import background2 from '../../../../assets/img/background2.png';
import background3 from '../../../../assets/img/background3.png';
import background4 from '../../../../assets/img/background4.png';

class Review extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Container>
        <Content style={ styles.content }>
          <Card style={ styles.card }>
            <CardItem cardBody>
              <ImageBackground source={ background1 } style={ styles.image }>
                <Text style={ styles.text }>新企业注册</Text>
                <Button bordered light style={ styles.btn }  onPress={ () => { this.props.navigation.navigate('InvokeCompany') } }>
                  <Text>查看</Text>
                </Button>
              </ImageBackground> 
            </CardItem>
          </Card>

          <Card style={ styles.card }>
            <CardItem cardBody>
              <ImageBackground source={ background2 } style={ styles.image }>
                <Text style={ styles.text }>原木类开征</Text>
                <Button bordered light style={ styles.btn }>
                  <Text>查看</Text>
                </Button>
              </ImageBackground> 
            </CardItem>
          </Card>

          <Card style={ styles.card }>
            <CardItem cardBody>
              <ImageBackground source={ background3 } style={ styles.image }>
                <Text style={ styles.text }>板材类开征</Text>
                <Button bordered light style={ styles.btn }>
                  <Text>查看</Text>
                </Button>
              </ImageBackground> 
            </CardItem>
          </Card>

          <Card style={{ marginBottom: px2Dp(10) }}>
            <CardItem cardBody>
              <ImageBackground source={ background4 } style={ styles.image }>
                <Text style={ styles.text }>木材运输证与植物检疫申请</Text>
                <Button bordered light style={ styles.btn }>
                  <Text>查看</Text>
                </Button>
              </ImageBackground> 
            </CardItem>
          </Card>

          <Text></Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: px2Dp(12),
    paddingLeft: px2Dp(8),
    paddingRight: px2Dp(8)
  },
  card: {
    marginBottom: px2Dp(15)
  },
  image: {
    flex:1, 
    height:110,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: px2Dp(20),
    marginLeft: px2Dp(8)
  },
  btn: {
    height: px2Dp(26),
    marginTop: px2Dp(64),
    marginRight: px2Dp(8)
  }
});

export default Review;
