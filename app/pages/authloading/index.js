/**
 * 欢迎页或者loading加载页，主要在这个页面校验登录问题
 */
import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native'
import asyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await asyncStorage.getItem('userToken');
    if (userToken) {
      const userInfo = await asyncStorage.getItem('userInfo');
      this.props.dispatch({ type: 'login/update', payload: { userInfo: JSON.parse(userInfo) } })
    }
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default connect()(AuthLoadingScreen)