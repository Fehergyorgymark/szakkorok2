import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/szakkorok.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'szakkorok',
      component: HomeView
    }
  ]
})

export default router
