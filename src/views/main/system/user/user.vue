<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content">
      <hb-table :listData="userList" :propList="propList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
      </hb-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'
import HbTable from '@/base-ui/table'
import { formConfig } from './config/serach.config'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HbTable
  },
  setup() {
    // const formItems: IFormItem[] = [
    //   {
    //     type: 'input',
    //     label: '用户名',
    //     rules: [],
    //     placeholder: '请输入用户名'
    //   },
    //   {
    //     type: 'input',
    //     label: '密码',
    //     placeholder: '请输入密码'
    //   },
    //   {
    //     type: 'select',
    //     label: '测试1',
    //     placeholder: '测试1',
    //     options: [
    //       { label: '111', value: 1 },
    //       { label: '222', value: 2 }
    //     ]
    //   },
    //   {
    //     type: 'datepicker',
    //     label: '创建时间',
    //     otherOptions: {
    //       type: 'daterange',
    //       startPlaceholder: '开始时间',
    //       endPlaceholder: '结束时间'
    //     }
    //   }
    // ]
    // const formConfig: Iform = {
    //   labelWidth: '120px',
    //   itemLayout: '10px 40px',
    //   formItems
    // }
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号', minWidth: '120' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
      { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' }
    ]

    return {
      formConfig,
      userList,
      propList
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
