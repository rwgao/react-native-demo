import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, InputItem, List, Toast } from "@ant-design/react-native";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  login() {
    const { userName, password } = this.state;
    if (userName === 'root' && password === '123456') {
      this.props.navigation.navigate('Home');
    } else {
      Toast.success('账户密码错误');
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <List style={{ marginTop: 20 }}>
          <InputItem
            placeholder={'用户名: root'}
            onChange={value => {
              this.setState({
                userName: value,
              });
            }}
          />
          <InputItem
            type={'password'}
            placeholder={'密码: 123456'}
            onChange={value => {
              this.setState({
                password: value,
              });
            }}
          />
        </List>
        <Button
          type="primary"
          size={'large'}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ margin: 16 }}
          onPress={() => {
            this.login();
          }}>
          登陆
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
