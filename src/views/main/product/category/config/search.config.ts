import { Iform } from '@/base-ui/form'

export const searchFormConfig: Iform = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '类别名称',
      placeholder: '请输入类别名称'
    },
    {
      filed: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemLayout: {
    padding: '0px 40px'
  },
  colLayout: { span: 8 }
}
