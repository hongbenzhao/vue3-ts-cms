<template>
  <span ref="counterRef"></span>
</template>
<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
// http://inorganik.github.io/countUp.js/
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'
const defaultOptions: CountUpOptions = {
  decimalPlaces: 2,
  duration: 2,
  separator: ',',
  decimal: '.',
  prefix: '￥'
}
export default defineComponent({
  props: {
    number: {
      type: Number,
      default: 0
    },
    option: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const counterRef = ref<HTMLDivElement | null>(null)
    const instance = ref<CountUp | null>(null)
    watch(
      () => props.number,
      () => {
        update(props.number)
      }
    )
    onMounted(() => {
      createCounter()
    })
    const createCounter = () => {
      if (!counterRef.value) return
      const opts: CountUpOptions = Object.assign(defaultOptions, props.option)
      instance.value = new CountUp(counterRef?.value, props.number, opts)
      start()
    }
    const start = () => {
      if (!instance.value) return
      instance?.value.start()
    }
    const update = (number: number) => {
      if (!instance.value) return
      instance.value?.update(number)
    }
    return {
      counterRef
    }
  }
})
</script>
<style scoped></style>
