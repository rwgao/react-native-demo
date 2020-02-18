import axios from 'axios'
import asyncStorage from '@react-native-community/async-storage';
import { Toast } from '@ant-design/react-native';
import { StackActions } from 'react-navigation'

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
      config.headers['Authorization'] = userToken
    }
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
    debugger
    console.log(data)
    if (data.code !== 1000) {
      Toast.fail(data.msg)
      if (data.code === 1003) {
        // window.location.href = '/login';
        StackActions.push({
          routeName: 'Auth'
        })
      }
    }
    return data;
  }, err => {
    console.log('response', err)
    return Promise.reject(err)
  }
)

export default request;