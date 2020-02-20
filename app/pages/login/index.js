import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback } from 'react-native'
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
      <ImageBackground
        style={{flex:1}}
        source={require('@/assets/images/loginbg.jpg')}
      >
        <TouchableWithoutFeedback
          style={{flex:1}}
        >
          <View style={styles.containerStyle}>
            <View style={styles.main}>
              <List>
                <InputItem
                  placeholder={'用户名: super'}
                  onChange={value => {
                    this.setState({
                      username: value,
                    });
                  }}
                />
                <InputItem
                  type={'password'}
                  placeholder={'密码: 12345678'}
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
                style={{ marginTop: 16 }}
                // eslint-disable-next-line react-native/no-inline-styles
                onPress={() => {
                  this.login();
                }}>
                登陆
        </Button>
            </View>
          </View>

        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    width: 320,
    height: 320
  }
});

function mapStateToProps({ login, loading }) {
  return {
    login,
    loginloading: loading.effects['login/login']
  }
}

export default connect(mapStateToProps)(LoginPage);