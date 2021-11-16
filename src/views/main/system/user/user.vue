<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal ref="pageModalRef" :modalConfig="modalConfig"></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { formConfig } from './config/serach.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSerach } from '@/hooks/usePageSerach'

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent,
    PageModal
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
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSerach()
    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const handleNewData = () => {
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    const handleEditData = (item: any) => {
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }

    return {
      pageContentRef,
      formConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      modalConfig,
      handleNewData,
      handleEditData,
      pageModalRef
    }
  }
})
</script>

<style scoped lang="less"></style>
