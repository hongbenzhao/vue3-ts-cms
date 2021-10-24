import HBRequest from './request/index'
import { BASE_URL } from './request/config'

const hbRequest = new HBRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptors: (config) => {
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer${token}`
      }
      return config
    },
    requestInterceptorsCatch: (err) => {
      console.log('请求失败拦截')
      return err
    },
    responseInterceptors: (res) => {
      console.log('响应成功拦截')
      return res
    },
    responseInterceptorsCatch: (err) => {
      console.log('响应失败拦截')
      return err
    }
  }
})
// const request2 = new HBRequest({
//   baseUR: '2'
// })
export default hbRequest
