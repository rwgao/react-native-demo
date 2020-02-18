import asyncStorage from '@react-native-community/async-storage'
import { StackActions } from 'react-navigation'
import { loginService } from '../services'

export default {
  // model在store中的名称
  namespace: 'login',
  state: {
    // state初始值
  },
  // 同步方法
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
  // 异步方法
  effects: {
    * login({ payload }, { call }) {
      const { code, result } = yield call(loginService.login, payload)
      if (code === 1000) {
        asyncStorage.setItem('userToken', result.token)
        asyncStorage.setItem('userInfo', result)
        StackActions.push({
          routeName: 'App'
        })
      }
    }
  }
}