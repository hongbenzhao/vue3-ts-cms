<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { formConfig } from './config/serach.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
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
    return {
      formConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
