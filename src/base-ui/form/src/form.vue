<template>
  <div class="hb-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemLayout"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  v-model="formData[`${item.filed}`]"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formData[`${item.filed}`]"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.label }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[`${item.filed}`]"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed, ref, watch } from 'vue'
import type { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemLayout: {
      type: Object,
      default: () => ({
        padding: '10px 40px'
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 8,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  // vue2 的sync
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 1 通过ref 和watch实现真正组件双向绑定
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )

    // 2 通过计算属性实现组件双向绑定有问题，的实际是没有调用emit
    // const formData = computed({
    //   get: () => props.modelValue,
    //   set: (newValue) => {
    //     // emit('update:modelValue', newValue)
    //   }
    // })
    // 3 不使用v-model,直接绑定传进来modelValue
    // const handleValueChange = (value: any, field: string) => {
    //   emit('update:modelValue', { ...props.modelValue, [field]: value })
    // }
    return {
      formData
    }
  }
})
</script>
<style scoped lang="less">
.hb-form {
  padding-top: 22px;
  .form-item {
    padding: 5px 30px;
  }
}
</style>
