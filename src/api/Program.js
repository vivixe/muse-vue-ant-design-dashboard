/*
 * @Author: vivi.
 * @Date: 2022-08-19 15:29:57
 * @LastEditTime: 2022-12-29 17:03:14
 * @FilePath: \back-stage\src\api\program\Program.js
 * @Description: 
 */
//导入request.js
import request from '@/utils/request'
import Qs from 'qs'
//添加项目接口
export const ProgramAddAPI = function(data) {
	return request({
		url: '/my/program/addproinfo',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': localStorage.getItem('token')
		},
		method: 'post',
		// data: Qs.stringify(data)
		data: Qs.stringify(data)
	})
}

//保存项目接口
export const ProgramSaveAPI = function(data) {
	return request({
		url: '/my/program/saveproinfo',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': localStorage.getItem('token')
		},
		method: 'post',
		// data: Qs.stringify(data)
		data: Qs.stringify(data)
	})
}

export const getProgramListAPI = function(data) {
	return request({
		url: "my/program/proinfo",
		method: "post",
		headers: {
			// 获取token
			"Authorization": localStorage.getItem("token")
		},
		data: Qs.stringify(data)
	});
}

// 获取admin列表
export const getAdminListAPI = function() {
	return request({
		url: "my/program/userlist",
		method: "get",
		headers: {
			// 获取token
			"Authorization": localStorage.getItem("token")
		}
	});
}

// 获取worker列表
export const getWorkerListAPI = function() {
	return request({
		url: "my/program/workerlist",
		method: "get",
		headers: {
			// 获取token
			"Authorization": localStorage.getItem("token")
		}
	});
}

export const getProDetail = function(data) {
	return request({
		url: "my/program/prodetail",
		method: "post",
		headers: {
			// 获取token
			"Authorization": localStorage.getItem("token")
		},
		data: Qs.stringify(data)
	});
}
