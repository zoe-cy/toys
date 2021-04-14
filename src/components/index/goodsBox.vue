<template>
  <div class="goodsbox">
    <div class="box" v-for="item in goodsList" :key="item.category">
      <div class="header">
        <span>{{item.category}}</span>
        <div class="right" @click="toGoodsList(item.category)">
          <span>查看全部</span>
          <span>></span>
        </div>
      </div>
      <ul class="imgs">
        <li v-for="(item, i) in goodsList" :key="i" @click="toGoodsDetail(item.id)">
          <img :src="item.picUrl" />
          <p>{{item.title}}</p>
          <!-- <p>{{item.min_price}}元起</p> -->
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
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
  },
  methods: {
    toGoodsList (category) {
      this.$router.push({ name: 'goodsList', params: { category } })
    },
    toGoodsDetail (id) {
      this.$router.push({ name: 'goodsDetail', params: { id } })
    }
  }
}
</script>
<style scoped>
.hot {
  overflow: hidden;
  margin-bottom: 10px;
  width: 100%;
}
.box {
  width: 1100px;
  margin: 0 auto;
}
.header {
  line-height: 80px;
  padding: 20px 10px 0;
}
.header span {
  float: left;
  font-size: 20px;
}
.right{
  float: right;
}
.right span {
  padding-left: 10px;
}
.imgs {
  width: 1100px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.imgs li {
  width: 360px;
  height: 245px;
  background-color: rgb(253, 253, 253);
  overflow: hidden;
  margin-right: 10px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(233, 227, 227);
}
li:hover {
  position: relative;
  top: -1px;
  box-shadow: 2px 2px 10px rgb(214, 212, 212);
}
.imgs li:nth-child(3n) {
    margin-right: 0;
}
.imgs li:nth-child(-n+3) {
    margin-bottom: 10px;
}
li img {
  width: 100%;
  height: 170px;
}
li p {
    line-height: 60px;
    text-align: center;
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
