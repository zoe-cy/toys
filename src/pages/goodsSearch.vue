<template>
  <div class="goods-search">
    <div class="header">
      <span>全部结果</span>
      <span>></span>
      <span>{{msg}}</span>
      <span :class="['right',flag ==3?'active':'']" data-active="3" @click="toTurn">
        价格<i class="iconfont icon-up"></i>
      </span>
      <span :class="['right',flag ==2?'active':'']" data-active="2" @click="toTurn">
        销量
      </span>
      <span :class="['right',flag ==1?'active':'']" data-active="1" @click="toTurn">
        综合
      </span>
    </div>
    <t-goodsbox></t-goodsbox>
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
  props: ['msg'],
  data () {
    return {
      flag: 1,
      goodsList: []
    }
  },
  methods: {
    toTurn (e) {
      this.flag = e.target.dataset.active
    }
  }
}
</script>
<style scoped>
.goods-search {
  width: 1100px;
  margin: 0 auto;
}
.header {
  margin: 0 10px;
  line-height: 80px;
}
.header>span {
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
