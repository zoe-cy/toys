<template>
  <div class="goods-list">
    <div class="header">
      <span v-if="!isSearch">
        <span>{{category}}</span>
        <span>></span>
      </span>
      <span v-else>
        <span>全部结果</span>
        <span>></span>
        <span>{{category}}</span>
      </span>
      <span :class="['right',flag ==3?'active':'']" data-active="3" @click="toTurn($event);toPrice()">
        价格<i class="iconfont icon-up"></i>
      </span>
      <span :class="['right',flag ==2?'active':'']" data-active="2" @click="toTurn($event);toSales()">
        销量
      </span>
      <span :class="['right',flag ==1?'active':'']" data-active="1" @click="toTurn($event);toSort()">
        综合
      </span>
    </div>
    <t-goodsbox :tGoodsList="goodsList"></t-goodsbox>
    <div class="alike">
      <div class="tip">
        <div class="line"></div>
        <p>猜你喜欢</p>
      </div>
      <div class="imgs">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in goodsList" :key="item.id">
            <img :src="item.pic_url" style="width:100%;height:100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
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
      flag: 1,
      isSearch: false,
      goodsList: [],
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
    toTurn (e) {
      this.flag = e.target.dataset.active
    },
    // 判断路由传值
    toGet () {
      if (this.category === '全部商品') {
        let arr = []
        arr = this.goodsTable.map(item => {
          return item.goods_list
        })
        this.goodsList = arr.reduce((a, b) => {
          return a.concat(b)
        })
      } else if (this.goodsTable.filter(item => {
        return item.category === this.category
      }).length > 0) {
        this.goodsList = this.goodsTable.find(item => {
          return item.category === this.category
        }).goods_list
      } else {
        this.isSearch = true
        this.goodsList = []
      }
    },
    // 商品排序
    toSort () {
      this.goodsList.sort((a, b) => {
        return a.id - b.id
      })
    },
    toSales () {
      this.goodsList.sort((a, b) => {
        return b.sold_num - a.sold_num
      })
    },
    toPrice () {
      this.goodsList.sort((a, b) => {
        return a.price - b.price
      })
    }
  },
  created () {
    this.toGet()
  },
  watch: {
    category: function (val) {
      this.toGet()
    }
  }
}
</script>
<style scoped>
.goods-list {
  width: 1100px;
  margin: 0 auto;
}
.header {
  margin: 0 10px;
  line-height: 80px;
}
.header span {
  width: 80px;
  margin: 0 5px;
}
.iconfont {
  font-size: 20px;
}
.right:hover {
  color: var(--hover-color);
}
.right::before {
  content: '';
  height: 50px;
  border-left: 1px solid rgb(130,130,130);
  margin-right: 27px;
}
.right:last-child::before {
  border: none;
}
.alike {
  width: 1100px;
  height: 500px;
  margin: 0 auto;
}
.tip {
  width: 100%;
  height: 100px;
  position: relative;
  overflow: hidden;
}
.tip .line {
  border-bottom: 1px solid rgb(130,130,130,.4);
  margin: 50px 0;
}
.tip p {
  width: 400px;
  line-height: 100px;
  font-size:24px;
  text-align: center;
  color: rgb(130,130,130);
  background-color: rgb(247, 246, 246);
  letter-spacing: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
