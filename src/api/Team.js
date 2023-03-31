//导入request.js
import request from '@/utils/request'
import Qs from 'qs'
// 获取team列表
export const getTeamListAPI = function (data) {
  return request({
    url: "my/team/getTeamList",
    method: "post",
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}

// 保存team
export const saveTeamAPI = function (data) {
  return request({
    url: "my/team/saveTeam",
    method: "post",
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}

// 获取team详情
export const getTeamDetailAPI = function (data) {
  return request({
    url: "my/team/getTeamDetail",
    method: "post",
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}

// 获取成员选择
export const getMemberSelectAPI = function (data) {
  return request({
    url: "my/team/getMemberSelect",
    method: "post",
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}

export const addMemberAPI = function (data) {
  return request({
    url: "my/team/addMember",
    method: "post",
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}

export const getMemberListAPI = function (data) {
  return request({
    url: "my/team/getMemberList",
    method: "post",
    headers: {
      // 获取token
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: Qs.stringify(data),
  })
}
