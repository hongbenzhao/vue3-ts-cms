import { ref, onMounted, onUnmounted } from 'vue'
export default function () {
  const ageMockData = [
    { startValue: 0, value: 22333, axis: '0-20', color: 'rgb(116,116,49)' },
    { startValue: 0, value: 22331, axis: '20-30', color: 'rgb(190,245,99)' },
    { startValue: 0, value: 21323, axis: '30-50', color: 'rgb(202,252,137)' },
    { startValue: 0, value: 33312, axis: '>50', color: 'rgb(251,253,142)' }
  ]
  // 登录设备数据
  const deviceMockData = {
    totalDevices: 10708,
    devices: [
      {
        key: 'android',
        value: 4932
      },
      {
        key: 'ios',
        value: 3479
      },
      {
        key: 'pc',
        value: 2334
      }
    ]
  }

  const todayUser = ref(10000)
  const growthLastDay = ref(10)
  const growthLastMonth = ref(15)
  const ageData = ref(ageMockData)
  const averageAge = ref(0)
  const deviceData = ref(deviceMockData)

  function random(val) {
    return Math.floor(Math.random() * val)
  }

  let task
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 10
      growthLastDay.value = growthLastDay.value + 1
      growthLastMonth.value = growthLastMonth.value + 1
      averageAge.value = averageAge.value + 1
      // 平均年龄数据
      const _ageData = [...ageData.value]
      _ageData.forEach((item) => {
        item.startValue = item.value
        item.value = item.value + random(100)
      })
      ageData.value = _ageData
      // 设备数据
      const _deviceData = { ...deviceData.value }
      _deviceData.totalDevices += random(100)
      _deviceData.devices.forEach((item) => {
        item.value += random(100)
      })
      deviceData.value = _deviceData
    }, 3000)
  })
  onUnmounted(() => {
    task && clearTimeout(task)
  })
  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
    ageData,
    averageAge,
    deviceData
  }
}
