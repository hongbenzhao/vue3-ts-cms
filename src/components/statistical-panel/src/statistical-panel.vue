<template>
  <div class="statistical">
    <div class="header">
      <span>{{ panelData.title }}</span>
      <el-tooltip :content="panelData.tips" placement="top" effect="light">
        <i class="el-icon-warning-outline"></i>
      </el-tooltip>
    </div>
    <div class="content">
      <hb-counter-up
        :number="panelData.number1"
        :option="panelData.amount === 'saleroom' ? counterOption2 : counterOption1"
      ></hb-counter-up>
    </div>
    <div class="footer">
      <span>
        {{ panelData.subtitle }}
        <hb-counter-up
          :number="panelData.number2"
          :option="panelData.amount === 'saleroom' ? counterOption2 : counterOption1"
        ></hb-counter-up>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HbCounterUp from '@/base-ui/count-up'
export default defineComponent({
  components: {
    HbCounterUp
  },
  props: {
    panelData: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const counterOption1 = {
      decimalPlaces: 0,
      prefix: ''
    }
    const counterOption2 = {
      decimalPlaces: 0,
      prefix: '￥'
    }
    return {
      counterOption1,
      counterOption2
    }
  }
})
</script>
<style lang="less" scoped>
@h: 38px;
.statistical {
  display: flex;
  padding: 0 20px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 2px 12px 0 rgb(0 0 0, 0.1);
  height: 130px;
  margin-bottom: 20px;
  .header {
    display: flex;
    height: @h;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    // border: 1px solid red;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  .content {
    display: flex;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .footer {
    display: flex;
    height: @h;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
