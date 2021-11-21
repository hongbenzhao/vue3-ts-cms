import { Iform } from '@/base-ui/form'
export const modalConfig: Iform = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      filed: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: {
    span: 24
  },
  itemLayout: {
    padding: '0px 40px'
  }
}
