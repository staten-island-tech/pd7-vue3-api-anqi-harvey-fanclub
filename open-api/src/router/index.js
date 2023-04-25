import { createRouter, createWebHistory } from 'vue-router'
import DoughnutView from '../views/DoughnutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'doughnut',
      component: DoughnutView
    }
  ]
})

export default router
