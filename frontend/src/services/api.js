import axios from 'axios'

export const beApi = axios.create({
  baseURL: process.env.BE_API
})
beApi.interceptors.request.use(config => {
    config.headers.authJWT = window.sessionStorage.getItem('jwt')
    return config
})

