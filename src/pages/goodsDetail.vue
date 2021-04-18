<template>
  <div class="goods-detail">
    <div class="goods">
      <div class="box">
        <div class="left">
          <el-carousel :interval="5000" arrow="always" indicator-position="outside">
            <el-carousel-item v-for="item in goods.pics" :key="item">
              <img :src="item" style="width:100%;height:100%" alt="no"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <div class="title">{{goods.title}}</div>
          <div class="subs">{{goods.attr}}</div>
          <div>
            <span class="active">{{goods.min_price}}元</span>
            <span class="subs text-de">{{goods.price}}元</span>
          </div>
          <div>样式选择:</div>
          <div class="kind">{{goods.kind}}</div>
           <div>
             <el-button type="warning" plain @click="toCars">立即购买</el-button>
            <el-button type="warning" plain @click="toCars">加入购物车</el-button>
          </div>
          <div>
            <el-button type="text" class="iconfont icon-duigou" v-for="(item, i) in serves" :key="i" @click="open(item)">{{item}}</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="box">
        <ul class="lis">
          <li>
          <span>商品详情</span>
          <span class="line"></span>
        </li>
        <li>
          <span>售后政策</span>
          <span class="line"></span>
        </li>
        </ul>
      </div>
    </div>
    <div class="content">
        <div class="box">
          <img src="../assets/teas.png" />
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      goods:
        {
          id: '1001',
          title: '拼图126片',
          series: '婴儿系列',
          seriesId: '01',
          category: '拼图',
          categoryId: '01',
          kind: '白色',
          attr: '模拟真实情景',
          price: 199,
          min_price: 100,
          pics: [require('../assets/teas.png'), require('../assets/teas.png'), require('../assets/teas.png')],
          pic_url: require('../assets/teas.png')
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
  border-top: 1px solid rgb(214, 212, 212);
}
.box {
  width: 1100px;
  margin: 0 auto;
}
.goods .box {
  display: flex;
}
.box>div {
  flex: 1;
  --swiper-theme-color:rgb(130, 130, 130,.6);
}
.left {
  height: 500px;
}
.el-carousel {
  width: 400px;
  margin: 80px auto 0;
}
.el-carousel__item {
  background-size: 100% 100%;
}
.el-button {
  font-weight: normal;
  margin-bottom: 10px;
}
.el-button--text,.el-button--text:focus,.el-button--text:hover {
  color: rgb(130, 130, 130,.6);
}
.right {
  padding-top: 70px;
  line-height: 40px;
}
.title {
  font-size: 24px;
}
.active {
  font-size: 20px;
}
.text-de {
  margin-left: 10px;
}
.kind {
  width: 80px;
  text-align: center;
  border: 1px solid var(--hover-color);
  margin-bottom: 20px;
}
.tabs {
  min-width: 1100px;
  height: 100px;
  background-color: var(--background-color);
  border-top: 1px solid rgb(214, 212, 212);
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
  border-left: 1px solid rgb(130, 130, 130,.4);
}
.tabs li:last-child span {
    border: none;
}
.tabs .content {
  min-width: 1100px;
  overflow: hidden;
}
.content img {
  width: 1100px;
}
</style>
