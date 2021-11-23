<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>
<script lang="ts" setup>
import BaseEchart from '@/base-ui/echart'
import { defineProps, computed, defineExpose, defineEmits } from 'vue'
import { IDataType } from '../types'
const props = defineProps<{
  pieData: IDataType[]
}>()
const options = computed(() => {
  return {
    title: {
      text: '分类商品数量',
      // subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>
<style scoped></style>
