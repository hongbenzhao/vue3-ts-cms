<template>
  <div class="department">
    <page-search :formConfig="formConfig" />
    <page-content
      pageName="department"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="modalInfo"
      :modalConfig="modalConfigRef"
      pageName="department"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'

export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // modal配置信息
    const store = useStore()
    const modalConfigRef = computed(() => {
      // 设置select options
      const parentIdItem = modalConfig.formItems?.find((item) => item.filed === 'parentId')
      parentIdItem!.options = store.state.entireDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()
    const [pageModalRef, modalInfo, handleNewData, handleEditData] = usePageModal()
    return {
      formConfig,
      contentTableConfig,
      modalConfig,
      modalInfo,
      modalConfigRef,
      pageModalRef,
      handleNewData,
      handleEditData,
      pageContentRef,
      handleQueryClick,
      handleResetClick
    }
  }
})
</script>

<style scoped></style>
