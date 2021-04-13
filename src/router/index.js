import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index'
import goodsIndex from '../pages/goodsIndex'
import goodsList from '../pages/goodsList'
import goodsDetail from '../pages/goodsDetail'
import cars from '../pages/cars'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: index,
      name: 'index',
      alias: '/index'
    },
    {
      path: '/goodsIndex',
      component: goodsIndex,
      name: 'goodsIndex'
    },
    {
      path: '/goodsList/:category',
      component: goodsList,
      name: 'goodsList'
    },
    {
      path: '/goodsDetail/:id',
      component: goodsDetail,
      name: 'goodsDetail'
    },
    {
      path: '/cars',
      component: cars,
      name: 'cars'
    }
  ]
})
export default router
