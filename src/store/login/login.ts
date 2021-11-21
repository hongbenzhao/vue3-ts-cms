import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/type'
import router from '@/router'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/catch'
import { mapMenusToRoutes, mapMenusToPermission } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // 1 userMenus => routes  2 将router => router.main.children
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 获取用户按钮权限
      const permissions = mapMenusToPermission(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCatch('token', token)
      // 请求所有部门和角色数据
      dispatch('getInitialDataAction', null, { root: true })

      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCatch('userInfo', userInfo)
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCatch('userMenus', userMenus)

      router.push('/main')
    },
    // 刷新后从本地缓存设置token
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCatch('token')
      if (token) {
        commit('changeToken', token)
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCatch('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCatch('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('手机登录-actions', payload)
    // }
  }
}

export default loginModule
