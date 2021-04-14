<template>
  <div class="goodsSearch">
      <div>
          <span>首页</span>>
          <span>全部结果</span>>
          <span>{{goodsList[0].kind}}</span>
      </div>
      <t-goodsbox></t-goodsbox>
  </div>
</template>
<script>
import tGoodsbox from '../components/goodsBox'
export default {
  components: {
    tGoodsbox
  },
  props: ['category'],
  data () {
    return {
      goodsList: [
        {
          id: '1001',
          title: '拼图126片拼图126片拼图126片拼图126片拼图126片拼图126片',
          series: '婴儿系列',
          seriesId: '01',
          category: '拼图',
          categoryId: '01',
          attr: '模拟真实情景',
          price: 199,
          min_price: 100,
          picUrl: require('../assets/teas.png')
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
