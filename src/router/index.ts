import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

// const routes: Array<RouteRecordRaw> = []
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
