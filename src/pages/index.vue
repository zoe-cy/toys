<template>
  <div class="index">
    <div class="main">
      <div class="box clearfix">
      <!-- banner z-index2 tabs z-index99-->
        <banners></banners>
        <t-tabs></t-tabs>
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
      <t-goodsbox :tHeight="tHeight"></t-goodsbox>
    </div>
  </div>
</template>
<script>
import banners from '../components/index/banners'
import tTabs from '../components/index/tabs'
import tGoodsbox from '../components/goodsBox'
export default {
  components: {
    banners,
    tGoodsbox,
    tTabs
  },
  data () {
    return {
      tHeight: {
        height: '510px'
      },
      goodsList: [
        {
          id: '1001',
          title: '拼图126片拼图126片拼图126片拼图126片拼图126片拼图126片',
          series: '婴儿系列',
          series_id: '01',
          category: '拼图',
          category_id: '01',
          attr: '模拟真实情景',
          price: 199,
          sold_num: 34,
          min_price: 100,
          pic_url: require('../assets/teas.png')
        },
        {
          id: '1001',
          title: '积木',
          series: '婴儿系列',
          series_id: '01',
          category: '拼图',
          category_id: '01',
          attr: '模拟真实情景',
          price: 199,
          sold_num: 34,
          min_price: 100,
          pic_url: require('../assets/teas.png')
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
  line-height: 80px;
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
