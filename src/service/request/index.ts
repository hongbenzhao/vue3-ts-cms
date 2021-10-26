import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HBRequestInterceptors, HBRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
// HBRequestConfig是继承AxiosRequestConfig 自己可以扩展属性
const DEFAULT_LOADING = true

class HBRequest {
  instance: AxiosInstance
  interceptors?: HBRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean

  constructor(config: HBRequestConfig) {
    //创建axios实例
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    // 1 实例的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
    // 2 全局所有实例都有的拦截器 后进先出
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例都有请求的拦截器')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据.....',
            background: 'rgba(0,0,0,.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例都有响应的拦截器')
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败')
        } else {
          return res.data
        }
      },
      (err) => {
        // 对http状态码判断
        this.loading?.close()
        if (err.response.status === 404) {
          console.log('404 错误')
        }
        return err
      }
    )
  }
  request<T>(config: HBRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.showLoading = config.showLoading ?? DEFAULT_LOADING
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 对单独请求做的拦截
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(config: HBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'get' })
  }
  post<T>(config: HBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'post' })
  }
  delete<T>(config: HBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'delete' })
  }
  patch<T>(config: HBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'patch' })
  }
}
export default HBRequest
