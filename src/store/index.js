import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

export default new Vuex.Store({
  state: {
    car: car,
    selAll: true
  },
  mutations: {
    // 加购物车
    addToCar (state, goods) {
      var flag = false
      state.car.map(item => {
        if (parseInt(item.id) === parseInt(goods.id)) {
          item.selected = true
          item.count += 1
          flag = true
        }
      })
      if (!flag) {
        goods.selected = true
        goods.count = 1
        state.car.push(goods)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    // 商品单选
    selGoods (state, obj) {
      state.car.map(item => {
        if (item.id === obj.id) {
          item.selected = !obj.selected
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    // 商品全选
    selAllGoods (state, selected) {
      state.car.map(item => {
        item.selected = !selected
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    // 购物车删除
    delGoods (state, id) {
      state.car.map((item, i) => {
        if (item.id === id) {
          state.car.splice(i, 1)
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    // 购物车商品件数
    getAllCount (state) {
      let num = 0
      state.car.map(item => {
        num += item.count
      })
      return num
    },
    // 选择总数
    getAllSelCount (state) {
      let num = 0
      state.car.map(item => {
        if (item.selected) {
          num += item.count
        }
      })
      return num
    },
    // 合计
    getAllPrice (state) {
      let price = 0
      state.car.map(item => {
        if (item.selected) {
          price += item.price * item.count
        }
      })
      return price
    },
    // 小计
    getPrice: state => id => {
      let price = 0
      state.car.map(item => {
        if (item.id === id) {
          price = item.price * item.count
        }
      })
      return price
    }
  }
})
