import { ILoginState } from './login/types'

export interface IRootState {
  name: string
}

export interface IRootWithModule {
  login: ILoginState
}
// 自己定义 store的类型
export type IStoreType = IRootState & IRootWithModule
