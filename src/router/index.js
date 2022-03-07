import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductPage from '../pages/productPage'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'ProductPage', component: ProductPage },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
