import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, List, ListItem, Icon, Left, Right } from 'native-base';

import { px2Dp } from '../../../utils';

class My extends Component {
  delCash = () => {
    setTimeout(() => {
      global.$toast.show('清理缓存成功', 'bottom');
    }, 1500);
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={ styles.content }>
          <List style={ styles.list }>
            <ListItem onPress={ this.props.navigation.openDrawer }>
              <Left>
                <Text>消息</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>

          <List style={ styles.list }>
            <ListItem onPress={ this.delCash }>
              <Left>
                <Text>清理缓存</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>

          <List style={ styles.list }>
            <ListItem>
              <Left>
                <Text>反馈</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>关于林业检疫助手</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>

          <List style={ styles.list }>
            <ListItem style={ styles.logot }>
              <Text style={{ color: '#FF8F3B' }}>退出登陆</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#EEEEEE',
    height: '100%'
  },
  list: {
    backgroundColor: '#FFF',
    marginBottom: px2Dp(7)
  },
  logot: {
    justifyContent: 'center'
  }
});

export default My;