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
            <el-button type="warning" plain @click="toCars">立即购买</el-button>
            <el-button type="warning" plain @click="toCars"
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
            <span>售后政策</span>
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
                <td class="tds">产品型号:</td>
                <td class="t-td">{{goods.id}}</td>
                <td class="tds">产品尺寸:</td>
                <td class="t-td">{{goods.size}}</td>
              </tr>
              <tr>
                <td class="tds">产品材质:</td>
                <td class="t-td">{{goods.texture}}</td>
                <td class="tds">适合年龄:</td>
                <td class="t-td">{{goods.age}}</td>
              </tr>
            </tbody>
          </table>
          <div class="imgs" v-for="item in goods.detail_pics" :key="item">
            <img :src="item" />
          </div>
        </div>
        <div v-if="flag == '2'">123</div>
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
      goods: {
        id: '1001',
        title: '积木城堡',
        category: '益智系列',
        category_id: '1',
        attr: ['进口榉木', '环保水性漆'],
        price: 30,
        old_price: 50,
        sold_num: 22,
        goods_num: 56,
        size: '20x20x4cm',
        texture: '木制',
        age: '12m+',
        detail_pics: [require('../assets/goods/100121.png')],
        pics: [require('../assets/goods/100111.png'), require('../assets/goods/100112.png')],
        pic_url: require('../assets/goods/100111.png')
      },
      serves: ['七天无理由退货', '品质保障']
    }
  },
  methods: {
    open (item) {
      this.$alert(item, {
        showConfirmButton: false
      })
    },
    toCars () {
      this.$router.push({ name: 'cars' })
    },
    toTurn (e) {
      this.flag = e.currentTarget.dataset.active
    }
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
  padding-top: 80px;
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
