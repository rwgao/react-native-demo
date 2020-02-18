import request from '../utils/request'

// 登录
export function login(params) {
  return request({
    url: '/u/login',
    method: 'post',
    data: params
  })
}

// 登出
export function logout(params) {
  return request({
    url: '/u/logout',
    method: 'GET',
    params: params
  })
}