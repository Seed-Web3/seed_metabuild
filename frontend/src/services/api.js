import axios from 'axios'

export const beApi = axios.create({
  baseURL: process.env.BE_API
})
beApi.interceptors.request.use(config => {
    // 给请求头加上Authorization,authJWT的字段,值为token
    config.headers.authJWT = window.localStorage.getItem('jwt')
    return config
})

