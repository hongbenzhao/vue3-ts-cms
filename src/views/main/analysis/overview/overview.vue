<template>
  <div class="overview">
    <hb-card title="关于">
      <div class="c-left">
        Vue3-ts-cms 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </hb-card>
    <hb-card title="技术栈">
      <hb-text-link :text-arrs="technologyStacks" />
      <hb-descriptions title="生产环境依赖" :column="2" :table-datas="dependencies" />
      <hb-descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" />
    </hb-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HbCard from '@/base-ui/card'
import HbTextLink from '@/base-ui/text-link'
import HbDescriptions from '@/base-ui/descriptions'
import { technologyStacks, dependencies, devDependencies } from './config'

export default defineComponent({
  name: 'overview',
  components: {
    HbCard,
    HbTextLink,
    HbDescriptions
  },
  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }
  .el-card {
    margin-bottom: 20px;
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
    .description {
      &:deep(.el-descriptions__title) {
        // ::v-deep .el-descriptions__title {
        font-weight: 400;
      }
    }
  }
}
</style>
