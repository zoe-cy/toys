<template>
  <div class="goods-detail">
    <div class="goods line">
      <div class="box">
        <div class="left">
          <el-carousel
            :interval="5000"
            arrow="always"
            indicator-position="outside"
          >
            <el-carousel-item v-for="item in goods.pics" :key="item">
              <img :src="item" style="width: 100%; height: 100%" alt="no" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <div class="title">{{ goods.title }}</div>
          <div>
            <span class="attr" v-for="item in goods.attr" :key="item">
              {{ item }}
            </span>
          </div>
          <div>
            <span class="active">{{ goods.price }}元</span>
            <span class="subs text-de">{{ goods.old_price }}元</span>
          </div>
          <div>库存：{{ goods.goods_num }}件</div>
          <div>
            <el-button type="warning" plain @click="toCart(),addToCar(goods)">立即购买</el-button>
            <el-button type="warning" plain @click="addToCar(goods)"
              >加入购物车</el-button
            >
          </div>
          <div>
            <el-button
              type="text"
              class="iconfont icon-duigou"
              v-for="(item, i) in serves"
              :key="i"
              @click="open(item)"
              >{{ item }}</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="tabs line">
      <div class="box">
        <ul class="lis">
          <li
            :class="[flag == 1 ? 'active' : '']"
            data-active="1"
            @click="toTurn"
          >
            <span>商品详情</span>
            <span class="line"></span>
          </li>
          <li
            :class="[flag == 2 ? 'active' : '']"
            data-active="2"
            @click="toTurn"
          >
            <span>注意事项</span>
            <span class="line"></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="box">
        <div v-if="flag == '1'">
          <table cellspacing="0" cellpadding="0" class="tables">
            <tbody>
              <tr>
                <td class="tds">产品类型:</td>
                <td class="t-td">{{goods.type}}</td>
                <td class="tds">适用年龄:</td>
                <td class="t-td">{{goods.age}}</td>
              </tr>
              <tr>
                <td class="tds">产品材质:</td>
                <td class="t-td">{{goods.texture}}</td>
                <td class="tds">适用性别:</td>
                <td class="t-td">{{goods.gender}}</td>
              </tr>
            </tbody>
          </table>
          <div class="imgs" v-for="item in goods.detail_pics" :key="item">
            <img :src="item" />
          </div>
        </div>
        <div v-if="flag == '2'">
          <img src="../assets/goods/tips.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      flag: 1,
      goods: {},
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
      ],
      serves: ['七天无理由退货', '品质保障']
    }
  },
  methods: {
    open (item) {
      this.$alert(item, {
        showConfirmButton: false
      })
    },
    toCart () {
      this.$router.push({ name: 'cart' })
    },
    addToCar (goods) {
      // 数据传给vuex
      this.$store.commit('addToCar', goods)
    },
    toTurn (e) {
      this.flag = e.currentTarget.dataset.active
    }
  },
  created () {
    this.goodsTable.map(item => {
      const obj = item.goods_list.find(item => {
        return item.id === this.id
      })
      if (obj) {
        this.goods = obj
      }
    })
  }
}
</script>
<style scoped>
.goods-detail {
  /* width: 100%; */
}
.goods {
  min-width: 1100px;
  height: 500px;
  background-color: var(--background-color);
}
.box {
  width: 1100px;
  margin: 0 auto;
}
.goods .box {
  display: flex;
}
.box > div {
  flex: 1;
  --swiper-theme-color: rgb(130, 130, 130, 0.6);
}
.left {
  height: 500px;
  overflow: hidden;
}
.left img {
}
.el-carousel {
  width: 400px;
  margin: 80px auto 0;
}
.el-carousel__item {
  height: 300px;
  background-size: 100% 100%;
  border: 1px solid rgb(214, 212, 212);
}
.el-button {
  font-weight: normal;
  margin-top: 10px;
}
.el-button--text,
.el-button--text:focus,
.el-button--text:hover {
  color: rgb(130, 130, 130, 0.6);
}
.right {
  padding-top: 90px;
  line-height: 40px;
}
.title {
  font-size: 24px;
  line-height: 60px;
  height: 60px;
}
.active {
  font-size: 20px;
}
.text-de {
  margin-left: 10px;
}
.attr::after {
  content: "";
  height: 50px;
  border-left: 1px solid rgb(130, 130, 130);
  margin: 0 8px;
}
.attr:last-child::after {
  border: none;
}
.tabs {
  min-width: 1100px;
  height: 100px;
  background-color: var(--background-color);
  text-align: center;
  /* border: 1px solid #000; */
}
.tabs .lis {
  display: flex;
  justify-content: center;
}
.tabs li {
  width: 200px;
  line-height: 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.tabs li:hover {
  color: var(--hover-color);
}
.tabs li .line {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 30%;
  border-left: 1px solid rgb(130, 130, 130, 0.4);
}
.tabs li:last-child span {
  border: none;
}
.content {
  min-width: 1100px;
  overflow: hidden;
}
.content img {
  width: 1100px;
}
.tables {
  border-collapse: collapse;
  min-width: 1100px;
}
.tables td {
  line-height: 60px;
}
.tds {
  width: 100px;
  text-align: center;
}
.t-td {
  width: 400px;
  padding-left: 20px;
}
</style>
