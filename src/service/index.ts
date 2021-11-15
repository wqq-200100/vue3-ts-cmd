// service统一出口
import WQRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const wqRequest = new WQRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token拦截
      // const token = ''
      // if (token) {
      //   config.headers.Authorzation = `Bearer ${token}`
      // }

      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorsCatch: (error) => {
      console.log('请求失败的拦截')
      return error
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorsCatch: (error) => {
      console.log('响应失败的拦截')
      return error
    }
  }
})
export default wqRequest