import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/assets/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router