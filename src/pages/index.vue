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
        <div class="right" @click="toGoodsList(item.category)">
          <span>查看全部</span>
          <span>></span>
        </div>
      </div>
      <t-goodsbox :tHeight="tHeight" :tGoodsList="item.goods_list"></t-goodsbox>
    </div>
  </div>
</template>
<script>
import banners from '../components/indexBanners'
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
              title: '蒙氏钥匙锁',
              attr: ['亲子课教具', '幼儿启蒙'],
              price: 29,
              old_price: 38,
              sold_num: 168,
              goods_num: 396,
              type: '蒙特梭利教具',
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
            },
            {
              id: '2002',
              title: '儿童手抓板拼图',
              attr: ['形状认知', '智力开发'],
              price: 23,
              old_price: 30,
              sold_num: 108,
              goods_num: 271,
              type: '木制玩具',
              age: '18m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/200211.png'),
                require('../assets/goods/200212.png')
              ],
              detail_pics: [
                require('../assets/goods/200221.png')
              ],
              pic_url: require('../assets/goods/200211.png')
            },
            {
              id: '2003',
              title: '婴幼儿拼图',
              attr: ['宝宝启蒙', '儿童益智'],
              price: 9,
              old_price: 12,
              sold_num: 128,
              goods_num: 196,
              type: '卡扣拼图',
              age: '24m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/200311.png'),
                require('../assets/goods/200312.png')
              ],
              detail_pics: [
                require('../assets/goods/200321.png')
              ],
              pic_url: require('../assets/goods/200311.png')
            },
            {
              id: '2004',
              title: '几何形状配对套柱积木',
              attr: ['开发益智力', '宝宝早教玩具'],
              price: 19,
              old_price: 23,
              sold_num: 58,
              goods_num: 96,
              type: '套柱积木',
              age: '12m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/200411.png'),
                require('../assets/goods/200412.png')
              ],
              detail_pics: [
                require('../assets/goods/200421.png')
              ],
              pic_url: require('../assets/goods/200411.png')
            },
            {
              id: '2005',
              title: '圆柱体插座家庭装',
              attr: ['早教玩具', '蒙氏教具'],
              price: 35,
              old_price: 45,
              sold_num: 148,
              goods_num: 339,
              type: '圆柱体插座',
              age: '24m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/200511.png'),
                require('../assets/goods/200512.png')
              ],
              detail_pics: [
                require('../assets/goods/200521.png')
              ],
              pic_url: require('../assets/goods/200511.png')
            },
            {
              id: '2006',
              title: '立体空间拼图',
              attr: ['逻辑思维', '游戏脑力'],
              price: 39,
              old_price: 69,
              sold_num: 274,
              goods_num: 636,
              type: '立体拼图',
              age: '36m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/200611.png'),
                require('../assets/goods/200612.png')
              ],
              detail_pics: [
                require('../assets/goods/200621.png')
              ],
              pic_url: require('../assets/goods/200611.png')
            },
            {
              id: '2007',
              title: '几何小拼板分数配对积木',
              attr: ['教学形状板', '益智玩具'],
              price: 25,
              old_price: 27,
              sold_num: 126,
              goods_num: 226,
              type: '木制玩具',
              age: '24m+',
              texture: '木制',
              gender: '中性',
              pics: [
                require('../assets/goods/200711.png'),
                require('../assets/goods/200712.png')
              ],
              detail_pics: [
                require('../assets/goods/200721.png')
              ],
              pic_url: require('../assets/goods/200711.png')
            }
          ]
        }
      ]
    }
  },
  methods: {
    toGoodsList (id) {
      this.$router.push({ name: 'goodsList', params: { category: id } })
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
