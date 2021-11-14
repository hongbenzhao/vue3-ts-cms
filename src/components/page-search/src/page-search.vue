<template>
  <div class="page-search">
    <!-- v-model="formData" 和:modelValue="formData" 效果相同 -->
    <hb-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <h1 class="header">
          <div class="handle-btns">
            <el-button icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
            <el-button type="primary" icon="el-icon-search" @click="handleQueryClick"
              >搜索</el-button
            >
          </div>
        </h1>
      </template>
    </hb-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import HbForm from '@/base-ui/form'

export default defineComponent({
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HbForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const formItems = props.formConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.filed] = ''
    }
    const formData = ref(formOriginData)
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[`${key}`]
      }
      emit('resetBtnClick')
    }
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>
<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
