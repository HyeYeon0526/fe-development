import { createRouter, createWebHistory } from 'vue-router'
import Product from '../views/ProductListView.vue'
import Counter from '../views/CounterOne.vue'


const routes = [
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/counter',
    name: 'counter',
    component: Counter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
