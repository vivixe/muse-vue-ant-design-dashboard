/*
 * @Author: vivi.
 * @Date: 2022-07-26 19:22:10
 * @LastEditTime: 2023-02-15 22:06:51
 * @FilePath: \back-stage\src\utils\request.js
 * @Description: 
 */
//导入axios
import axios from 'axios'

const request = axios.create({
    // baseURL: 'http://localhost:3007',
    // baseURL: 'http://192.168.18.119:3007',
    // baseURL: 'http://192.168.31.142:3007',
    baseURL: 'http://47.120.9.115/api/',
    // baseURL: 'http://47.120.9.115:80/api/',
})

export default request