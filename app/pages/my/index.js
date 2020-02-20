import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Button, WingBlank, List } from '@ant-design/react-native'

class My extends Component {
  _handleLogout() {
    const { dispatch } = this.props;
    dispatch({ type: 'login/logout' })
  }

  render() {
    const { userInfo, navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <WingBlank>
          <View style={styles.header}>
            <View style={styles.avatarBox}>
              <Text style={styles.avatar}>{userInfo.name.slice(0, 1)}</Text>
            </View>
            <View>
              <Text style={styles.username}>{userInfo.name}</Text>
            </View>
          </View>
        </WingBlank>
        <List>
          <List.Item
              arrow="horizontal"
              onPress={() => navigation.navigate('CouponExpense')}
          >
            点券消费
          </List.Item>
          <List.Item
              arrow="horizontal"
              onPress={() => navigation.navigate('CouponBuy')}
          >
            点券购买
          </List.Item>
          <List.Item
              arrow="horizontal"
              onPress={() => this._handleLogout()}
          >
            退出登录
          </List.Item>
        </List>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#4c70e8',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  avatar: {
    fontSize: 28,
    color: '#fff'
  },
  username: {
    fontSize: 20
  }
})

function mapStateToProps({ login }) {
  return {
    userInfo: login.userInfo
  }
}

export default connect(mapStateToProps)(My);