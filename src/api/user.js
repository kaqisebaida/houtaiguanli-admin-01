// 登录相关请求模块
// 用户登录
import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    // dta用来设置POST请求体a
    data: data
  })
}

export const getUserProfile = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile'
  })
}

export const updateUserProfile = data => {
  return request({
    method: 'PATCH',
    url: '/mp/v1_0/user/profile',
    data
  })
}
