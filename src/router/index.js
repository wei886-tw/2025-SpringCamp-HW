import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/assets/views/HomeView.vue'
import BlogView from '@/assets/views/BlogView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router