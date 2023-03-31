//导入request.js
import request from '@/utils/request'
import Qs from 'qs'

// 保存版本的接口
export const saveVersionAPI = function(data) {
    return request({
        url: '/my/version/saveVersion',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
        },
        method: 'post',
        data: Qs.stringify(data)
    })
}

// 获取版本列表的接口
export const getVersionListAPI = function(data) {
    return request({
        url: '/my/version/getVersionList',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
        },
        method: 'post',
        data: Qs.stringify(data)
    })
}