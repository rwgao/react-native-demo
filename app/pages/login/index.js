import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, InputItem, List } from '@ant-design/react-native'
import { connect } from 'react-redux'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  login() {
    const { username, password } = this.state;
    const { dispatch } = this.props;
    dispatch({ type: 'login/login', payload: { username, password } })
  }

  render() {
    const { loginloading } = this.props;
    return (
      <View style={styles.containerStyle}>
        <List style={{ marginTop: 20 }}>
          <InputItem
            placeholder={'用户名: root'}
            onChange={value => {
              this.setState({
                username: value,
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
          loading={loginloading}
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

function mapStateToProps({ login, loading }) {
  return {
    login,
    loginloading: loading.effects['login/login']
  }
}

export default connect(mapStateToProps)(LoginPage);