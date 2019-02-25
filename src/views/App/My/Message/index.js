import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';

class Message extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>
          Message
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default Message;