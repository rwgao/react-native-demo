import asyncStorage from '@react-native-community/async-storage'
import { loginService } from '@/services'
import { Toast } from '@ant-design/react-native'
import NavigationService from '@/utils/navigation'

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
        asyncStorage.setItem('userInfo', JSON.stringify(result))
        NavigationService.navigate('App')
        // StackActions.push({
        //   routeName: 'App'
        // })
      }
    },
    * logout({ payload }, { call }) {
      const { code } = yield call(loginService.logout)
      if (code === 1000) {
        Toast.success('登出成功')
        asyncStorage.clear()
        NavigationService.reset('Auth')
        // StackActions.push({
        //   routeName: 'Auth'
        // })
      }
    }
  }
}