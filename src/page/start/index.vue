<template>
    <div class="h100">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <div class="navig" :style="'background-image:url('+slide.bac+')'">
            <div class="navig-title" v-if="index < swiperSlides.length-1">{{slide.title}}</div>
            <div class="navig-cont" v-else>
              <div class="navig-logo">
                <img :src="logo"/>
                <div class="navig-logo-title">FITNESS LOVE</div>
              </div>
              <div class="navig-brief">
                Fitness Love - This app will allow you to achieve great results, within a short period of time.
              </div>
              <div class="navig-btns">
                <router-link to="/register" class="navig-btn sign-facebook">sign up with phone number</router-link>
                <router-link to="/register" class="navig-btn sign-email">sign up with email</router-link>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-tool" v-if="swiperIndex == 4">
        <div>&nbsp;</div>
        <div class="swiper-button swiper-next" @click="toLogin">LOG IN</div>
      </div>
      <div class="swiper-tool" v-else>
        <div class="swiper-button swiper-skip" @click="skip()">SKIP</div>
        <div class="swiper-button swiper-next">NEXT</div>
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'startIndex',
  data () {
    return {
      logo: require('@/assets/images/logo.png'),
      swiperIndex: 0,
      swiperOption: {},
      swiperSlides: [
        {title: 'SIMPLE TIPS TO BALANCE YOUR MIND, BODY & SOUL', bac: require("@/assets/images/back-01.jpg")},
        {title: 'SMALL CHANGES CAN MAKE A BIG DIFFERENCE', bac: require("@/assets/images/back-02.jpg")},
        {title: 'SHARE YOUR WORKOUT PLAN WITH YOUR FRIEDN', bac: require("@/assets/images/back-03.jpg")},
        {title: 'TRACK YOUR NUTRITION, FITNESS, & HEALTH DATA', bac: require("@/assets/images/back-04.jpg")},
        {title: '', bac: require("@/assets/images/back-05.jpg")}
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created(){
     var _this = this;
    _this.swiperOption = {
      initialSlide: 4,
      navigation: {
        nextEl: '.swiper-next',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      on: {
        touchStart: function(){
          if(this.realIndex != 0 && this.realIndex != 4){
            this.allowSlidePrev = true;
            this.allowSlideNext = true;
          }else if(this.realIndex == 0){
            this.allowSlidePrev = false;
          }else if(this.realIndex == 4){
            this.allowSlideNext = false;
          }
        },
        slideChange: function(){
          _this.swiperIndex = this.realIndex;
        },
        slideTo: function(index){
          this.slideTo(index);
        }
      }
    }
  },
  methods: {
    skip(){
      
    },
    toLogin(){
      this.$router.push({
        path: '/login',
        name: 'login'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container{
  width: 100%;
  height: 100%;
}
.navig{
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.navig-title{
  padding: 0 0.48rem;
  line-height: 1.4;
  font-size: 0.76rem;
  font-weight: bold;
  color: #fff;
  word-wrap: break-word;
  text-align: left;
  position: absolute;
  bottom: 1.4rem;
}
.swiper-tool{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  color: #fff;
  font-size: 0.32rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.48rem;
  position: absolute;
  bottom: 0.26rem;
  z-index: 1;
}
.swiper-button{
  outline: none;
}
.navig-cont{
  width: 100%;
  padding: 1.8rem 0.5rem 0;
  color: #fff;
}
.navig-logo{
  padding-bottom: 0.76rem;
}
.navig-logo img{
  width: 2.4rem;
  height: 2.4rem;
  margin-bottom: 0.6rem;
}
.navig-logo-title{
  line-height: 1;
  font-weight: bold;
  font-size: 0.6rem;
}
.navig-brief{
  font-size: 0.36rem;
  line-height: 1.5;
}
.navig-btns{
  padding-top: 1rem;
}
.navig-btn{
  display: block;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.4rem;
  font-weight: bold;
  color: #fff;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}
.sign-facebook{
  background: #3b5998;
}
.sign-email{
  background: #fff;
  color: #282c37;
}
</style>
