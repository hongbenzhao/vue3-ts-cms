<template>
  <div class="page-modal">
    <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center>
      <hb-form v-bind="modalConfig" v-model="formData"></hb-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import HbForm from '@/base-ui/form'

export default defineComponent({
  components: {
    HbForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const dialogVisible = ref(false)
    const formData = ref({})

    return {
      dialogVisible,
      formData
    }
  }
})
</script>
<style scoped></style>
