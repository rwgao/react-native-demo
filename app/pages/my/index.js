import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from '@ant-design/react-native'

class My extends Component {
  _handleLogout() {
    const { dispatch } = this.props;
    dispatch({ type: 'login/logout' })
  }

  render() {
    return (
      <View>
        <Text>My</Text>
        <Button onPress={() => this._handleLogout()}>登出</Button>
      </View>
    );
  }
}

export default connect()(My);