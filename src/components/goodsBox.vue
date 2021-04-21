<template>
  <div class="goodsbox">
      <ul class="imgs" :style="tHeight">
        <li v-for="item in tGoodsList" :key="item.id" @click="toGoodsDetail(item.id)">
          <img :src="item.pic_url" />
          <p class="title">
            {{item.title}}
          </p>
          <p>
            <span class="active">{{item.price}}元</span>
            <span class="subs text-de" v-if="item.price">{{item.old_price}}元</span>
             <span class="subs">月销{{item.sold_num}}件</span>
          </p>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  props: ['tHeight', 'tGoodsList'],
  data () {
    return {
    }
  },
  methods: {
    toGoodsDetail (id) {
      this.$router.push({ name: 'goodsDetail', params: { id } })
    }
  }
}
</script>
<style scoped>
.goodsbox {
  overflow: hidden;
  min-width: 1100px;
}
.imgs {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 0 auto 20px;
}
.imgs li {
  width: 360px;
  height: 260px;
  background-color: var(--background-color);
  overflow: hidden;
  margin-right: 10px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(233, 227, 227);
  margin-bottom: 10px;
}
li:hover {
  position: relative;
  top: -1px;
  box-shadow: 2px 2px 10px rgb(214, 212, 212);
}
.imgs li:nth-child(3n) {
    margin-right: 0;
}
/* .imgs li:nth-child(-n+3) {
    margin-bottom: 10px;
} */
li img {
  width: 100%;
  height: 170px;
}
li p{
    line-height: 50px;
    text-align: center;
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
p:last-child {
  line-height: 20px;
}
p:last-child span{
  font-size: 14px;
  padding: 0 2px;
}
</style>
