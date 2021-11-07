import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}
// 自己定义 store的类型
export type IStoreType = IRootState & IRootWithModule
