<template>
  <div class="role">
    <page-search :formConfig="formConfig"></page-search>
    <page-content :contentTableConfig="contentTableConfig" pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { formConfig } from './config/serach.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      contentTableConfig,
      formConfig
    }
  }
})
</script>

<style scoped></style>
