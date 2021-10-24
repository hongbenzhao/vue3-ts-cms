import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HBRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  // responseInterceptors?: (res: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (error: any) => any
}

export interface HBRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HBRequestInterceptors<T>
  showLoading?: boolean
}
