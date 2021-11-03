export interface IFormItem {
  type: string
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  //特殊属性
  otherOptions?: any
}

export interface Iform {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
