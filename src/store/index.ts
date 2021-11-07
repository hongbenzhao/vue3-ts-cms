import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 123
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

// 1 可以使用 pinia 库 来解决vuex 和ts兼容 2或者自己封装store类型
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
