//导入request.js
import request from '@/utils/request'
import Qs from 'qs'
// 保存公告的接口
export const saveAnnouncementAPI = function(data) {
	return request({
		url: '/my/info/saveAnnouncement',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': localStorage.getItem('token')
		},
		method: 'post',
		// data: Qs.stringify(data)
		data: Qs.stringify(data)
	})
}

// 获取公告列表的接口
export const getAnnouncementListAPI = function(data) {
	return request({
		url: '/my/info/getAnnouncementList',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': localStorage.getItem('token')
		},
		method: 'post',
		// data: Qs.stringify(data)
		data: Qs.stringify(data)
	})
}