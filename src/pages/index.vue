<template>
  <div class="index">
    <div class="main">
      <div class="box clearfix">
      <!-- banner z-index2 tabs z-index99-->
        <banners></banners>
      </div>
    </div>
    <div class="goodsbox" v-for="item in goodsList" :key="item.category_id">
      <div class="header">
        <span>{{item.category}}</span>
        <div class="right" @click="toGoodsList(item.category_id)">
          <span>查看全部</span>
          <span>></span>
        </div>
      </div>
      <t-goodsbox :tHeight="tHeight" :tGoodsList="item"></t-goodsbox>
    </div>
  </div>
</template>
<script>
import banners from '../components/index/banners'
import tGoodsbox from '../components/goodsBox'
export default {
  components: {
    banners,
    tGoodsbox
  },
  data () {
    return {
      tHeight: {
        height: '540px'
      },
      goodsList: [
        {
          id: '1001',
          title: '积木城堡',
          category: '益智系列',
          category_id: '1',
          kind: '白色',
          attr: ['进口榉木', '环保水性漆'],
          price: 30,
          old_price: 50,
          sold_num: 22,
          size: '20x20x4cm',
          texture: '木制',
          age: '12m+',
          pics: [require('../assets/goods/10011.png'), require('../assets/goods/10012.png')],
          pic_url: require('../assets/goods/10011.png')
        }
      ]
    }
  },
  methods: {
    toGoodsList (id) {
      this.$router.push({ name: 'goodsList', params: { category_id: id } })
    }
  }
}
</script>
<style scoped>
.index {
}
.main {
  width: 100%;
  background-color: var(--background-color);
  margin-bottom: 15px;
}
.box {
  height: 500px;
  width: 1100px;
  position: relative;
  margin: 0 auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  text-align: center;
}
.goodsbox {
  width: 1100px;
  margin: 0 auto;
}
.header {
  line-height: 70px;
  padding: 0 10px;
}
.header span {
  float: left;
  font-size: 20px;
}
.right span {
  padding-left: 10px;
}
</style>
