<template>
  <div class="container">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="(item, i) in bannerList"
        :key="i"
        :style="{ backgroundImage: 'url('+item.picUrl+')'}"
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
  props: ['bannerList'],
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // loop: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        //   stopOnLastSlide: false
        // },
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
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
.container {
    /* width: 100%;
    height: 500px; */
    overflow: hidden;
    --swiper-theme-color: rgb(241, 180, 24);
}
.swiper-slide {
    width: 100%;
    height: 500px;
    background-size: 100% 100%;
}
.swiper-button-prev {
  position: absolute;
  left: 210px;
}
</style>
