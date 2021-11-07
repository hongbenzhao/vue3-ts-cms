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
            <el-button icon="el-icon-refresh">重置</el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
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
