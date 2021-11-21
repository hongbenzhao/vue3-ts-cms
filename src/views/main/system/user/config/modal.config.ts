import { Iform } from '@/base-ui/form'
export const modalConfig: Iform = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      filed: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      filed: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      isHidden: true
    },
    {
      filed: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      filed: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      filed: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: []
    }
  ],
  colLayout: {
    span: 24
  },
  itemLayout: {
    padding: '0px 40px'
  }
}
