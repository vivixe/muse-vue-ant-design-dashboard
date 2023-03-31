/*
 * @Author: vivi.
 * @Date: 2022-08-12 20:17:52
 * @LastEditTime: 2022-12-11 00:20:05
 * @FilePath: \back-stage\src\api\worker\Worker.js
 * @Description:
 */
//导入request模块
import request from '@/utils/request'
//导入qs模块
import Qs from 'qs'



//添加员工
export const saveWorkerAPI = function (data) {
    
  return request({
    url: 'my/worker/saveinfo',
    method: 'post',
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}

export const getWorkerInfoAPI = function (data) {
  return request({
    url: 'my/worker/detail',
    method: 'post',
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}

export const delWorkerAPI = function (data) {
  return request({
    url: 'my/worker/del',
    method: 'post',
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}

export const getWorkerListAPI = function () {
  return request({
    url: 'my/worker/info',
    method: 'get',
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
    },
  })
}
