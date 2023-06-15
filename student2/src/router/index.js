import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '../views/StudentListView.vue'

const routes = [
  {
    path: '/',
    name: 'StudentListView',
    component: StudentListView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
