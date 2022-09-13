<template>
  <div id="container" ref="refName">
    <!-- <button style="font-size: 100px" @click="changeStyle">change style</button> -->
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, nextTick } from 'vue'
import { debounce } from '../../utils/index.js'
export default defineComponent({
  name: 'ImoocContainer',
  props: {
    options: Object
  },
  setup(ctx) {
    const refName = ref(null)
    const width = ref(0)
    const height = ref(0)
    const originalWidth = ref(0)
    const originalHeight = ref(0)
    const ready = ref(false)
    let context, dom: HTMLElement, observer
    // const style = ref({})
    // const changeStyle = () => {
    //   style.value = {
    //     ...style.value,
    //     height: '1000px'
    //   }
    // }

    const initSize = () => {
      return new Promise<void>((resolve) => {
        nextTick(() => {
          dom = refName.value as any
          // 获取屏幕尺寸
          if (ctx.options && ctx.options?.width && ctx.options?.height) {
            width.value = ctx.options.width
            height.value = ctx.options.height
          } else {
            width.value = dom.clientWidth
            height.value = dom.clientHeight
          }
          // 获取画布尺寸
          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width
            originalHeight.value = window.screen.height
          }
          resolve()
        })
      })
    }
    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`
        dom.style.height = `${height.value}px`
      } else {
        console.log(dom)
        dom.style.width = `${originalWidth.value}px`
        dom.style.height = `${originalHeight.value}px`
      }
    }
    const updateScale = () => {
      // 获取真实视口尺寸
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      // 获取大屏最终宽高
      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value

      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight
      console.log(widthScale)
      dom && (dom.style.transform = `scale(${widthScale},${heightScale})`)
    }
    const onResize = () => {
      initSize()
      updateScale()
    }
    const initMutationObserver = () => {
      const MutationObserver = window.MutationObserver
      const observer = new MutationObserver(onResize)
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true
      })
    }
    const removeMutationObserver = () => {
      if (observer) {
        observer.disconnect()
        observer.taskRecords()
        observer = null
      }
    }
    onMounted(async () => {
      ready.value = false
      await initSize()
      console.log(dom)
      updateSize()
      updateScale()
      window.addEventListener('resize', debounce(200, onResize))
      initMutationObserver()
      ready.value = true
    })
    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
      removeMutationObserver()
    })
    return {
      refName,
      ready
    }
  }
})
</script>
<style scoped lang="less">
#container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 999;
  transform-origin: left top;
}
</style>
