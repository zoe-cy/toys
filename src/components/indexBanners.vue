<template>
  <div class="banners">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="item in bannerList"
        :key="item.id"
        :style="{ backgroundImage: 'url('+item.pic_url+')'}"
        @click="toGoodsDetail(item.id)"
      >
       <!-- <img :src="item.picUrl" alt="this is a produnction picture" /> -->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'banners',
  // props: ['bannerList'],
  data () {
    return {
      bannerList: [
        {
          id: '1002',
          title: '撕不烂认知铁盒玩具',
          attr: ['益智配对', '早教卡片'],
          price: 8,
          old_price: 15,
          sold_num: 58,
          goods_num: 96,
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
        }
      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: false
        },
        speed: 3000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    toGoodsDetail (id) {
      this.$router.push({ name: 'goodsDetail', params: { id } })
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    // this.swiper.slideTo(3, 1000, false)
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
<style scoped>
.banners {
  width: 100%;
  height: 500px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  overflow: hidden;
  --swiper-theme-color: rgb(241, 180, 24);
}
.swiper-slide {
    width: 100%;
    height: 500px;
    background-size: 100% 100%;
}
/* .swiper-button-prev {
  position: absolute;
  left: 210px;
} */
</style>
