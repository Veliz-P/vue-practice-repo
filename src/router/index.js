import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/HomeView.vue'
const routes = [
  {
    name: 'root',
    path: '/',
    redirect: { name: 'home' },
  },
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
