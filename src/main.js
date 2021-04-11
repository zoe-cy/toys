import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import './assets/iconfont/iconfont.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(VueResource)

Vue.http.options.root = 'http://192.168.0.101:3066/'
Vue.http.options.emulateJSON = true

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
