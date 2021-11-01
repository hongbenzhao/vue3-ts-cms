import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
// import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/catch'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

// const routes: Array<RouteRecordRaw> = []
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL)
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCatch('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
