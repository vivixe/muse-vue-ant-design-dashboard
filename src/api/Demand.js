//导入request.js
import request from '@/utils/request'
import Qs from 'qs'

// 保存需求的接口
export const saveDemandAPI = function(data) {
    return request({
		url: '/my/demand/saveDemand',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': localStorage.getItem('token')
		},
		method: 'post',
		data: Qs.stringify(data)
	})
}

// 获取需求列表的接口
export const getDemandListAPI = function(data) {
    return request({
        url: '/my/demand/getDemandList',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
        },
        method: 'post',
        data: Qs.stringify(data)
    })
}

// 获取需求详情的接口
export const getDemandDetailAPI = function(data) {
    return request({
        url: '/my/demand/getDemandDetail',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
        },
        method: 'post',
        data: Qs.stringify(data)
    })
}

export const getDemandInfoAPI = function(data) {
    return request({
        url: '/my/demand/getDemandInfo',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
        },
        method: 'post',
        data: Qs.stringify(data)
    })
}