import { Iform } from '@/base-ui/form'

export const formConfig: Iform = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称',
      rules: []
    },
    {
      filed: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导',
      rules: []
    },
    {
      filed: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemLayout: { padding: '10px 40px' },
  colLayout: { span: 8 }
}
