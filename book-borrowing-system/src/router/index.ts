
import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/home'
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('@/views/home/Index.vue')
  // }

]
const history = createWebHistory()

const router = createRouter({
  history,
  routes

})

export default router;
