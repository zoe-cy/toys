<template>
  <div class="tabs" @mouseleave="flag= -1">
      <!-- 左侧 -->
    <ul class="list">
      <li
        v-for="(item, i) in goodsList"
        :key="item.category_id"
        :class="[flag == i? 'active': ''] "
        :data-active= "i"
        @mouseover="toTurn"
      >
        <div class="box">
          <span>{{item.category}}</span>
          <span>></span>
        </div>
      </li>
    </ul>
    <!-- 右侧 -->
    <div
      class="goodslist"
      v-if="flag != -1"
    >
      <ul>
        <li
          v-for="item in goodsList"
          :key="item.id"
          @click="toGoodsDetail(item.id)"
        >
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      flag: -1,
      hover: -1,
      sorting: [{ id: 1, title: '布偶' }, { id: 2, title: '积木' }],
      goodsList: [
        {
          id: '1001',
          title: '7788',
          series: '婴儿系列',
          series_id: '01',
          category: '拼图',
          category_id: '1',
          attr: '模拟真实情景',
          price: 110,
          sold_num: 88,
          min_price: 77,
          pic_url: require('../../assets/teas.png')
        },
        {
          id: '1001',
          title: '9910',
          series: '婴儿系列',
          series_id: '01',
          category: '拼图',
          category_id: '2',
          attr: '模拟真实情景',
          price: 110,
          sold_num: 1010,
          min_price: 99,
          pic_url: require('../../assets/teas.png')
        },
        {
          id: '1001',
          title: '1112',
          series: '婴儿系列',
          series_id: '01',
          category: '拼图',
          category_id: '3',
          attr: '模拟真实情景',
          price: 110,
          sold_num: 1212,
          min_price: 1111,
          pic_url: require('../../assets/teas.png')
        }
      ]
    }
  },
  methods: {
    toTurn (e) {
      console.log('1', e.currentTarget.dataset.active)
      this.flag = e.currentTarget.dataset.active
    },
    toGoodsDetail (id) {
      this.$router.push({ name: 'goodsDetail', params: { id } })
    }
  },
  mounted: {
  },
  computed: {
  }
}
</script>
<style scoped>
.tabs {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  width: 500px;
  height: 500px;
}
.list {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    background-color: rgba(130, 130, 130, 0.6);
}
.list li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    color: var(--background-color);
}
.list li span:first-child {
    float: left;
}
.list li span:last-child {
    float: right;
}
.list li:hover {
    color: rgb(48, 47, 47);
    background-color: rgb(253, 253, 253,.9);
}
.active {
  color: rgb(48, 47, 47)!important;
  background-color: rgb(253, 253, 253,.9);
}
.goodslist {
    position: absolute;
    left: 200px;
    top: 0;
    width: 300px;
    height: 100%;
    color: rgb(48, 47, 47);
    background-color: rgb(253, 253, 253,.9);
    box-shadow: 5px 30px 6px 1px rgb(87, 84, 84,.2);
}
.goodslist li {
    width: 100px;
    height: 100px;
    float: left;
    line-height: 100px;
}
.goodslist li:hover {
    color: rgb(241, 180, 24);
}
/* .goodslist li span {
    padding-left: 10px;
    border-left: 1px solid rgb(130, 130, 130);
} */
</style>
