<template>
  <div class=footer>
    <div class="box">
      <ul class="top">
      <li
        v-for="item in serves"
        :key="item.serve_id"
      >
        <span @click="toServes(item.serve_id)">{{item.serve}}</span>
        <span class="line"></span>
      </li>
    </ul>
    </div>
    <div class="content">
      <p>@2021 浙江七彩公司版权 所有</p>
      <p>浙ICP备100328662</p>
    </div>
    <p class="bottom">让每个孩子拥有快乐的童年</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      serves: [
        { serve: '全场满69包邮', serve_id: 1 },
        { serve: '7天无理由退货', serve_id: 2 },
        { serve: '15天免费换货', serve_id: 3 }
      ]
    }
  },
  methods: {
    toServes (id) {
      this.$router.push({ name: 'serves', params: { serve_id: id } })
    }
  }
}
</script>
<style scoped>
.footer {
  min-width: 1100px;
  text-align: center;
  line-height: 200px;
}
.box {
  background-color: var(--background-color);
}
.top {
  height: 70px;
  overflow: hidden;
  display: flex;
  margin: 0 auto 20px;
  width: 1100px;
  /* border-bottom: 1px solid rgb(130, 130, 130,.4); */
}
.top li {
  height: 70px;
  line-height: 70px;
  flex: 1;
  position: relative;
}
.top li .line {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 50%;
  border-left: 1px solid rgb(130, 130, 130,.4);
}
.top li:last-child span {
    border: none;
}
li:hover {
  color: var(--hover-color);
}
.content {
  height: 40px;
  overflow: hidden;
  color: rgb(130, 130, 130,.6);
  margin-bottom: 10px;
}
.content p {
  line-height: 20px;
}
.bottom {
  overflow: hidden;
  height: 60px;
  line-height: 60px;
  color: rgb(130, 130, 130,.4);
  font-size: 22px;
}
</style>
