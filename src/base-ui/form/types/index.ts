export interface IFormItem {
  filed: string
  type: string
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  //特殊属性
  otherOptions?: any
  isHidden?: boolean
}

export interface Iform {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
