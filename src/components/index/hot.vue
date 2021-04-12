<template>
  <div class="hot">
    <div class="header">
      <span>拼图</span>
      <span>></span>
      <span>查看全部</span>
    </div>
    <ul class="imgs">
      <li v-for="(item, i) in goodsList" :key="i">
        <img :src="item.picUrl" />
        <p>{{item.attr}}</p>
        <p>{{item.min_price}}元起</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goodsList: [
        {
          id: '1001',
          title: '拼图1',
          category: '拼图',
          attr: '模拟真实情景',
          price: 199,
          min_price: 100,
          picUrl: require('../../assets/teas.png')
        },
        {
          id: '1001',
          title: '拼图1',
          category: '拼图',
          attr: '模拟真实情景',
          price: 199,
          min_price: 100,
          picUrl: require('../../assets/teas.png')
        },
        {
          id: '1001',
          title: '拼图1',
          category: '拼图',
          attr: '模拟真实情景',
          price: 199,
          min_price: 100,
          picUrl: require('../../assets/teas.png')
        },
        {
          id: '1001',
          title: '拼图1',
          category: '拼图',
          attr: '模拟真实情景',
          price: 199,
          min_price: 100,
          picUrl: require('../../assets/teas.png')
        },
        {
          id: '1001',
          title: '拼图1',
          category: '拼图',
          attr: '模拟真实情景',
          price: 199,
          min_price: 100,
          picUrl: require('../../assets/teas.png')
        },
        {
          id: '1001',
          title: '拼图1',
          category: '拼图',
          attr: '模拟真实情景',
          price: 199,
          min_price: 100,
          picUrl: require('../../assets/teas.png')
        },
        {
          id: '1001',
          title: '拼图1',
          category: '拼图',
          attr: '模拟真实情景',
          price: 199,
          min_price: 100,
          picUrl: require('../../assets/teas.png')
        },
        {
          id: '1001',
          title: '拼图1',
          category: '拼图',
          attr: '模拟真实情景',
          price: 199,
          min_price: 100,
          picUrl: require('../../assets/teas.png')
        }
      ]
    }
  }
}
</script>
<style scoped>
.hot {
  overflow: hidden;
}
.header {
  line-height: 80px;
  padding: 20px 10px 0;
}
.header span {
  float: right;
  font-size: 20px;
}
.header span:first-child {
  float: left;
}
.imgs {
  width: 1100px;
  height: 500px;
  border: 1px solid #000;
  display: flex;
  flex-wrap: wrap;
}
.imgs li {
  width: 360px;
  height: 245px;
  background-color: rgb(253, 253, 253);
  flex:1;
  overflow: hidden;
  margin-right: 10px;
  border-radius: 3px;
  box-shadow: 2px 2px 3px rgba(233, 227, 227);
  border: 1px solid #000;
}
.imgs li:nth-child(3n) {
    margin-right: 0;
}
.imgs li:nth-child(-n+3) {
    margin-bottom: 10px;
}
img {
  width: 275px;
  height: 100px;
}
</style>
