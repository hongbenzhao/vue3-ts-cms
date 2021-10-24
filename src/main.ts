import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import hbRequest from './service'
const app = createApp(App)

app.use(globalRegister)
// registerApp(app)
app.use(store).use(router)
app.mount('#app')

// hbRequest.request({
//   url: '/home/multidata',
//   method: 'get',
//   interceptors: {
//     requestInterceptors: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptors: (res) => {
//       console.log('单独响应的respone')
//       return res
//     }
//   }
// })
interface DateType {
  data: any
  returnCode: string
  success: boolean
}

// hbRequest
//   .request<DateType>({
//     url: '/home/multidata',
//     method: 'get'
//   })
//   .then((res) => {
//     console.log(res)
//   })

// hbRequest
//   .get<DateType>({
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     console.log(res)
//   })
