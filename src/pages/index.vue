<template>
  <div class="index">
    <div class="main">
      <div class="box clearfix">
        <!-- banner z-index2 tabs z-index99-->
        <banners></banners>
      </div>
    </div>
    <div class="goodsbox" v-for="item in goodsTable" :key="item.category_id">
      <div class="header">
        <span>{{ item.category }}</span>
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
      goodsTable: [
        {
          category_id: '1',
          category: '益智系列',
          goods_list: [
            {
              id: '1001',
              title: '儿童钓鱼玩具磁性鱼宝宝小猫游戏',
              attr: ['手眼协调', '智力早教'],
              price: 28,
              old_price: 32,
              sold_num: 22,
              goods_num: 56,
              type: '钓鱼拼板',
              age: '24m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/100111.png'),
                require('../assets/goods/100112.png')
              ],
              detail_pics: [
                require('../assets/goods/100121.png')
              ],
              pic_url: require('../assets/goods/100111.png')
            },
            {
              id: '1002',
              title: '撕不烂认知铁盒玩具',
              attr: ['益智配对', '早教卡片'],
              price: 8,
              old_price: 15,
              sold_num: 58,
              goods_num: 96,
              type: '铁盒认知卡',
              age: '24m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/100211.png'),
                require('../assets/goods/100212.png')
              ],
              detail_pics: [
                require('../assets/goods/100221.png')
              ],
              pic_url: require('../assets/goods/100211.png')
            },
            {
              id: '1003',
              title: '婴幼儿拼图',
              attr: ['宝宝启蒙', '儿童益智'],
              price: 9,
              old_price: 32,
              sold_num: 158,
              goods_num: 496,
              type: '卡扣拼图',
              age: '24m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/100311.png'),
                require('../assets/goods/100312.png')
              ],
              detail_pics: [
                require('../assets/goods/100321.png')
              ],
              pic_url: require('../assets/goods/100311.png')
            },
            {
              id: '1004',
              title: '磁性苹果圣诞树',
              attr: ['学数数分苹果', '蒙特教具'],
              price: 31,
              old_price: 35,
              sold_num: 18,
              goods_num: 76,
              type: '快乐果园',
              age: '36m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/100411.png'),
                require('../assets/goods/100412.png')
              ],
              detail_pics: [
                require('../assets/goods/100421.png')
              ],
              pic_url: require('../assets/goods/100411.png')
            }
          ]
        },
        {
          category_id: '2',
          category: '积木系列',
          goods_list: [
            {
              id: '2001',
              title: '百变立人套柱套塔积木',
              attr: ['蒙氏早教', '儿童益智'],
              price: 28,
              old_price: 32,
              sold_num: 158,
              goods_num: 496,
              type: '百变立人',
              age: '12m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/200111.png'),
                require('../assets/goods/200112.png')
              ],
              detail_pics: [
                require('../assets/goods/200121.png')
              ],
              pic_url: require('../assets/goods/200111.png')
            }
          ]
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
