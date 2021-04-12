<template>
  <div class="tabs" @mouseleave="hover= -1">
      <!-- 左侧 -->
    <ul class="list">
      <li
        v-for="(item, i) in sorting"
        :key="i"
        @mouseover="hover=item.id"
      >
        <div class="box">
          <span>{{item.title}}</span>
          <span>></span>
        </div>
      </li>
    </ul>
    <!-- 右侧 -->
    <div
      class="goodslist"
      v-if="hover != -1"
    >
      <ul>
        <li
          v-for="(item, i) in goodslist"
          :key="i"
        >
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hover: -1,
      sorting: [{ id: 1, title: '布偶' }, { id: 2, title: '积木' }],
      goodslist: ['布偶1', '布偶2', '布偶2', '布偶2', '布偶2', '布偶2', '布偶2', '布偶1']
    }
  },
  methods: {
    // tab () {
    //   console.log('f', this.flag)
    //   this.$nextTick(function () {
    //     let rel = []
    //     console.log('test', this.$refs.tabs && this.$refs.tabs.length > 0)
    //     if (this.$refs.tabs && this.$refs.tabs.length > 0) {
    //       rel = this.$refs.tabs.filter(function (item) {
    //         console.log('num', this.flag)
    //         return parseInt(item.dataset.index) === parseInt(this.hover)
    //       })
    //     }
    //     if (rel.length > 0) {
    //       this.flag = true
    //     }
    //     console.log('flag', this.flag)
    //   })
    // }
  },
  mounted: {
  },
  computed: {
    // flag () {
    //   let rel = []
    //   if (this.$refs.tabs) {
    //     rel = this.$refs.tabs.filter(function (item) {
    //       return parseInt(item.dataset.index) === parseInt(this.hover)
    //     })
    //   }
    //   console.log('tabs', this.$refs.tabs)
    //   return rel.length > 0
    // }
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
    color: rgb(253, 253, 253);
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
