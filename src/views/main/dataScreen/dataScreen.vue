<template>
  <div class="dataScreen">
    <imooc-loading v-if="loading">
      <div class="loading-test">数据大屏加载中。。。</div>
    </imooc-loading>
    <imooc-container v-else :options="{ width: 3840, height: 2160 }">
      <div class="header"></div>
      <div class="seaparator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :todayUser="todayUser"
              :growthLastDay="growthLastDay"
              :growthLastMonth="growthLastMonth"
            ></total-user>
          </div>
          <div class="left2">
            <average-age :data="ageData" :avgAge="averageAge"></average-age>
          </div>
          <div class="left3">
            <total-device :data="deviceData"></total-device>
          </div>
          <div class="left4">444</div>
          <div class="left5">444</div>
          <div class="left6">444</div>
        </div>
        <div class="right">
          <div class="right-top1">111</div>
          <div class="right-top2">111</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">111</div>
              <div class="right-left2">111</div>
              <div class="right-left3">111</div>
              <div class="right-left4">111</div>
            </div>
            <div class="right-right">
              <div class="right-right1">111</div>
              <div class="right-right2">111</div>
            </div>
          </div>
        </div>
      </div>
    </imooc-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Container from '@/components/Container'
import Loading from '@/components/Loading'
import TotalUser from '@/components/TotalUser/index.vue'
import AverageAge from '@/components/AverageAge/index.vue'
import TotalDevice from '@/components/TotalDevice/index.vue'
import useScreenData from '@/hooks/useScreenData'
import { ref, onMounted } from 'vue'
export default defineComponent({
  components: {
    ImoocContainer: Container,
    ImoocLoading: Loading,
    TotalUser,
    AverageAge,
    TotalDevice
  },
  name: 'dataScreen',
  setup() {
    const loading = ref(true)
    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 1000)
    })
    const screenData = useScreenData()
    console.log(screenData)
    return {
      loading,
      ...screenData
    }
  }
})
</script>
<style scoped lang="less">
.dataScreen {
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  #container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      height: 167px;
    }
    .seaparator {
      width: 100%;
      height: 10px;
      background: rgb(92, 88, 89);
    }
    .center {
      width: 100%;
      flex: 1;
      display: flex;
      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        width: 860px;
        justify-content: space-between;
        padding-bottom: 20px;
        box-sizing: border-box;
        .left1 {
          height: 300px;
        }
        .left2 {
          height: 300px;
        }
        .left3 {
          height: 300px;
        }
        .left4 {
          height: 300px;
        }
        .left5 {
          height: 300px;
        }
        .left6 {
          height: 300px;
        }
      }
      .right {
        flex: 1;
        background: black;
        display: flex;
        flex-direction: column;
        .right-top1 {
          width: 100%;
          height: 206px;
          background: cadetblue;
        }
        .right-top2 {
          width: 100%;
          height: 48px;
          background: chocolate;
        }
        .right-bottom {
          flex: 1;
          display: flex;
          padding-bottom: 20px;
          .right-left {
            flex: 0 0 1917px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 1917px;
            .right-left1 {
              height: 999px;
              background: cornflowerblue;
            }
            .right-left2 {
              height: 80px;
              background: cornsilk;
            }
            .right-left3 {
              height: 350px;
              background: cyan;
            }
            .right-left4 {
              height: 220px;
              background: darkblue;
            }
          }
          .right-right {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            justify-content: space-between;
            flex: 1;
            .right-right1 {
              width: 100%;
              height: 999px;
              background: darkblue;
            }
            .right-right2 {
              flex: 1;
              width: 100%;
            }
          }
        }
      }
    }
  }
  .loading-test {
  }
}
// .test {
//   font-size: 100px;
//   color: red;
//   // 突破浏览器字体最小12px限制
//   transform: scale(1, 1);
// }
</style>
