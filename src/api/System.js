//导入request.js
import request from '@/utils/request'
import Qs from 'qs'
// 保存系统配置
export const saveSystemInfoAPI = function(data) {
    return request({
        url: '/my/system/saveSystemInfo',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
        },
        method: 'post',
        data: Qs.stringify(data)
    })
}

// 获取系统配置
export const getSystemInfoAPI = function(data) {
    return request({
        url: '/my/system/getSystemInfo',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
        },
        method: 'post',
        data: Qs.stringify(data)
    })
}