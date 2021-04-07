import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: index,
      name: 'index'
    }
  ]
})
export default router
