<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item" />
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <hb-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </hb-card>
      </el-col>
      <el-col :span="10">
        <hb-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </hb-card>
      </el-col>
      <el-col :span="7">
        <hb-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </hb-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <hb-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </hb-card>
      </el-col>
      <el-col :span="12">
        <hb-card title="不同城市商品收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </hb-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import HbCard from '@/base-ui/card'
import StatisticalPanel from '@/components/statistical-panel'
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    HbCard,
    StatisticalPanel,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')
    const topPanelData = computed(() => store.state.dashboard.topPanelDatas)
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => ({
        name: item.name,
        value: item.goodsCount
      }))
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return {
        xLabels,
        values
      }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return {
        xLabels,
        values
      }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item) => ({
        name: item.address,
        value: item.count
      }))
    })
    // const options = {
    //   title: {
    //     text: 'ECharts 入门示例'
    //   },
    //   tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //       // cross shadow
    //       type: 'cross'
    //     }
    //   },
    //   // echart 5新增的
    //   toolbox: {
    //     show: true,
    //     feature: {
    //       dataView: {
    //         readOnly: false,
    //         restore: {},
    //         saveAsImage: {}
    //       }
    //     }
    //   },
    //   dataZoom: {},
    //   legend: {
    //     data: ['销量']
    //   },
    //   xAxis: {
    //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: '销量',
    //       type: 'bar',
    //       data: [5, 20, 36, 10, 10, 20]
    //     }
    //   ]
    // }
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      topPanelData
    }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  background-color: #f5f5f5;
  .row {
    margin-top: 20px;
  }
}
</style>
