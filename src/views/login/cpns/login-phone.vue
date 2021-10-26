<template>
  <div class="">
    <el-form ref="ruleForm" :rules="rules" status-icon label-width="60px" class="demo-ruleForm">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone.num" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" type="password" autocomplete="off"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return {
      phone
    }
  }
})
</script>
<style scoped lang="less">
.get-code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
