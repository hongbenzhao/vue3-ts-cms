import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/catch'
import { firstMenu } from '@/utils/map-menus'

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
    path: '/dataScreen',
    name: 'dataScreen',
    component: () => import('@/views/main/dataScreen/dataScreen.vue')
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
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
