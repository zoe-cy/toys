import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index'
import goodsSearch from '../pages/goodsSearch'
import goodsList from '../pages/goodsList'
import goodsDetail from '../pages/goodsDetail'
import cars from '../pages/cars'
import serves from '../pages/serves'
import intro from '../pages/intro'
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
      path: '/goodsSearch/:msg',
      component: goodsSearch,
      name: 'goodsSearch',
      props: true
    },
    {
      path: '/goodsList/:category',
      component: goodsList,
      name: 'goodsList',
      props: true
    },
    {
      path: '/goodsDetail/:id',
      component: goodsDetail,
      name: 'goodsDetail',
      props: true
    },
    {
      path: '/cars',
      component: cars,
      name: 'cars',
      props: true
    },
    {
      path: '/serves/:serve_id',
      component: serves,
      name: 'serves',
      props: true
    },
    {
      path: '/intro',
      component: intro,
      name: 'intro',
      props: true
    }
  ]
})
export default router
