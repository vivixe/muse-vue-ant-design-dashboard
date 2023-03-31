/*
 * @Author: vivi.
 * @Date: 2023-01-11 19:25:18
 * @LastEditTime: 2023-01-12 22:06:40
 * @FilePath: \back-stage\src\api\user\user.js
 * @Description: 
 */
//导入request.js
import request from '@/utils/request'
import Qs from 'qs'
//登录接口
export const LoginAPI = function (username ,password) {
    let data = {
        username,
        password
    }
    return request({
        url: '/api/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        data: Qs.stringify(data)

    })
            
}

export const RegAPI = function (username, password, nickname) {
  let data = {
      username,
      password,
      nickname
  }
  return request({
      url: '/api/reguser',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      data: Qs.stringify(data)
  })
}

export const getUserInfoAPI = function (data) {
  return request({
    url: "my/userinfo",
    method: "post",
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}

export const updateUserInfoAPI = function (data) {
  return request({
    url: "my/updateuserinfo",
    method: "post",
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}