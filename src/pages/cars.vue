<template>
  <div class="cars line">
    <div class="box">
      <div class="header">
        <span>购物车</span>
        <span>></span>
        <span class="right">
          <span @click="toGoodsList('全部商品')">
            继续购物
          </span> >
        </span>
      </div>
      <table class="cart" width="100%">
        <tr>
          <th width="100">
            全选<span @click.capture="selAllGoods(flag)" :class="['iconfont','icon-fangduigou','all-sel',flag?'sel':'']"></span>
          </th>
          <th width="120"></th>
          <th width="220">商品名称</th>
          <th>单价</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in $store.state.car" :key="item.id" class="line">
          <td>
            <span :class="['iconfont','icon-fangduigou',item.selected?'sel':'']" @click="selGoods(item.id,item.selected)"></span>
          </td>
          <td>
            <img :src="item.pic_url" />
          </td>
          <td class="goods-title">{{item.title}}</td>
          <td>{{item.price}}元</td>
          <td>
            <el-input-number v-model="item.count" @change="handleChange" :min="1" :max="item.goods_num" label="数量" size="small"></el-input-number>
          </td>
          <td>{{$store.getters.getPrice(item.id)}}元</td>
          <td>
            <el-button type="primary" icon="el-icon-delete" size="mini" @click="delGoods(item.id)"></el-button>
          </td>
        </tr>
      </table>
      <div class="section">
        <span class="left">
          共<span class="active">{{$store.getters.getAllCount}}</span>件商品，
          已选择<span class="active">{{$store.getters.getAllSelCount}}</span>件
        </span>
        <span class="right">
          合计：<span class="active">{{$store.getters.getAllPrice}}元</span>
          <el-button type="warning" plain class="btn">
            去结算
          </el-button>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 1,
      flag: false,
      tableData: [
        {
          id: '1001',
          count: 1,
          title: '儿童钓鱼玩具磁性鱼宝宝小猫游戏',
          attr: ['手眼协调', '智力早教'],
          price: 28,
          old_price: 32,
          sold_num: 22,
          goods_num: 6,
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
          count: 1,
          title: '撕不烂认知铁盒玩具111111111111wthyjdsdbgnhgbfvdcsxjuhtgrfeh545yuytre4t5y6yjbddfgrhtjyt4rdwfgnfvdcsx',
          attr: ['益智配对', '早教卡片'],
          price: 8,
          old_price: 15,
          sold_num: 58,
          goods_num: 96,
          sel_num: 9,
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
          count: 1,
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
          count: 1,
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
    }
  },
  methods: {
    toGoodsList (id) {
      this.$router.push({ name: 'goodsList', params: { category: id } })
    },
    selAllGoods (flag) {
      this.$store.commit('selAllGoods', flag)
      this.flag = !this.flag
    },
    selGoods (id, sel) {
      this.$store.commit('selGoods', { id, selected: sel })
    },
    delGoods (id) {
      this.$store.commit('delGoods', id)
    }
  }
}
</script>
<style scoped>
.cars {
  min-width: 1100px;
  min-height: 600px;
  --swiper-theme-color: var(--hover-color);
}
.box {
  width: 1100px;
  margin: 0 auto;
}
.header {
  margin: 0 10px;
  line-height: 80px;
}
.header>span {
  margin: 0 5px;
}
.header .right span {
  margin-right: 10px;
}
.header .right:hover {
  color: var(--hover-color);
}
.cart {
  min-width: 1100px;
  background: var(--background-color);
  line-height: 70px;
}
.cart .line {
  text-align: center;
}
.cart .line td:nth-child(3) {
  text-align: left;
}
.all-sel {
  margin-left: 10px;
  font-weight: normal;
  size: 20px!important;
}
.iconfont {
  size: 20px!important;
}
.sel {
  background-color: var(--hover-color);
  color: var(--background-color);
}
.goods-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/deep/.el-input.is-active .el-input__inner,
/deep/.el-input__inner:focus,
/deep/.el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled),
/deep/.el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled){
  border-color: var(--hover-color);
}
/deep/.el-input-number__decrease:hover,
/deep/.el-input-number__increase:hover {
  color: var(--hover-color);
}
/deep/.el-button--primary:focus,
/deep/.el-button--primary:hover {
  border-color: var(--hover-color);
  background-color: var(--hover-color);
}
/deep/.el-button--primary {
  background-color: var(--background-color);
  color: rgb(95, 95, 95);
  border-color: rgb(214, 212, 212);
}
.cart img {
  width: 100px;
  height: 50px;
  vertical-align: center;
}
.section {
  height: 60px;
  line-height: 60px;
  width: 1100px;
  margin: 40px 0;
  padding: 0 20px;
  background: var(--background-color);
}
.active {
  padding: 0 12px;
}
.btn {
  margin-left: 40px;
  height: 100%;
}
</style>
