import { Iform } from '@/base-ui/form'

export const modalConfig: Iform = {
  title: '新建部门',
  formItems: [
    { filed: 'name', type: 'input', label: '部门名称', placeholder: '请输入部门名称' },
    {
      filed: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择上级部门',
      options: []
    },
    { filed: 'leader', type: 'input', label: '领导名称', placeholder: '请输入领导名称' }
  ],
  colLayout: { span: 24 },
  itemLayout: {
    padding: '0px 40px'
  }
}
