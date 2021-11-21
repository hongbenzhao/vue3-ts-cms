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
    <page-modal
      :defaultInfo="defaultInfo"
      pageName="users"
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { formConfig } from './config/serach.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSerach } from '@/hooks/usePageSerach'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'

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

    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.filed === 'password')
      passwordItem!.isHidden = false
    }
    // 页面自己特有的逻辑 部分formItems不显示
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.filed === 'password')
      passwordItem!.isHidden = true
    }

    const store = useStore()
    // 动态向配置添加部门和角色列表需通过计算属性，副作用来实现 vuex异步请求获取的数据
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => item.filed === 'departmentId')
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems.find((item) => item.filed === 'roleId')
      roleItem!.options = store.state.entireRole.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSerach()
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
      newCallback,
      editCallback
    )

    return {
      pageContentRef,
      formConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      modalConfigRef,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped lang="less"></style>
