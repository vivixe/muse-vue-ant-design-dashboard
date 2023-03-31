/*
 * @Author: vivi.
 * @Date: 2023-01-31 13:31:17
 * @LastEditTime: 2023-02-01 15:18:29
 * @FilePath: \back-stage\src\api\position\Position.js
 * @Description: 职位管理的接口
 */
//导入request.js
import request from '@/utils/request'
import Qs from 'qs'
// 保存职位的接口
export const savePositionAPI = function(data) {
  return request({
		url: '/my/position/savePosition',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': localStorage.getItem('token')
		},
		method: 'post',
		// data: Qs.stringify(data)
		data: Qs.stringify(data)
	})
}
// 获取职位列表的接口
export const getPositionListAPI = function(data) {
  return request({
    url: '/my/position/getPositionList',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage.getItem('token')
    },
    method: 'post',
    // data: Qs.stringify(data)
    data: Qs.stringify(data)
  })
}
// 获取职位详情的接口
export const getPositionDetailAPI = function(data) {
  return request({
    url: '/my/position/getPositionDetail',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage.getItem('token')
    },
    method: 'post',
    data: Qs.stringify(data)
  })
}