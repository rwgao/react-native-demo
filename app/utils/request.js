import axios from 'axios'
import asyncStorage from '@react-native-community/async-storage';
import { Toast } from '@ant-design/react-native';
import NavigationService from './navigation'

const request = axios.create({
  baseURL: 'http://crm-test-api.chiyu9.com',
  timeout: 5000
})

request.interceptors.request.use(
  async (config) => {
    // do something before request is sent
    let userToken = await asyncStorage.getItem('userToken')
    if (userToken) {
      // let each request carry token
      config.headers['Authorization'] = `Bearer ${userToken}`
    } else {
      config.headers['Authorization'] = ''
    }
    console.log(config)
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const data = response.data || {}
    console.log(data)
    if (data.code !== 1000) {
      Toast.fail(data.msg)
      if (data.code === 1003) {
        asyncStorage.clear()
        NavigationService.jumpTo('Auth')
      }
    }
    return data;
  }, err => {
    const data = err.response.data || {}
    if (data.status === 401 || data.code === 1003) {
      asyncStorage.clear()
      NavigationService.jumpTo('Auth')
    }
    console.log('response', err)
    return Promise.reject(err)
  }
)

export default request;