export interface IAccount {
  name: string
  password: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
