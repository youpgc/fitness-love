<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata" @headfun='skip()'></head-bar>
    <div class="heados">
      <div class="step-cont">
        <div class="step-title">Step 2/5</div>
        <div class="step-label">What is your goal ?</div>
        <div class="step-goal">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(slide, index) in goals" :key="index">
                    <div class="goal-img">
                        <img :src="slide.url">
                    </div>
                    <div class="goal-title">{{slide.title}}</div>
                </swiper-slide>
            </swiper>
        </div>
      </div>
      <div class="step-next gradient-back" @click="nextStep()">NEXT</div>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/common/head';
import Swiper from 'swiper';

export default {
  components: {
    headBar
  },
  name: 'step2',
  data () {
    return {
      headdata: {
        text: '',
        src: require('@/assets/images/icon-30.png'),
        span: 'SKIP'
      },
      formData: { muscle: 'Build Muscle'},
      swiperOption: {},
      goals: [
          {title: 'Build Muscle', url: require('@/assets/images/back-06.png')},
          {title: 'Lose Fat', url: require('@/assets/images/back-06.png')},
          {title: 'Body Building', url: require('@/assets/images/back-06.png')}
      ],
    }
  },
  created(){
    var data = this.$route.params;
    for(let key in data){
      this.formData[key] = data[key];
    }
    this.formData['step'] = 2;
    this.initPage();
  },
  methods: {
    initPage(){
      var _this = this;
      _this.swiperOption = {
        initialSlide: 0,
          navigation: {
              nextEl: '.swiper-next',
          },
          pagination: {
              el: '.swiper-pagination',
          },
          on: {
              touchStart: function(){
                if(this.realIndex != 0 && this.realIndex != 2){
                    this.allowSlidePrev = true;
                    this.allowSlideNext = true;
                }else if(this.realIndex == 0){
                    this.allowSlidePrev = false;
                }else if(this.realIndex == 2){
                    this.allowSlideNext = false;
                }
              },
              slideChange: function(){
                _this.formData.muscle = _this.goals[this.realIndex].title;
              },
              slideTo: function(index){
                this.slideTo(index);
              }
          }
      }
    },
    skip(){
      console.log('skip');
    },
    nextStep(){
      var _this = this;
      _this.DB.put(_this.formData, function(res){
        _this.$router.push({
          path: '/step3',
          name: 'step3',
          params: _this.formData
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.step-goal{
    width: 100%;
    height: 9.5rem;
    padding-top: 0.5rem;
}
.goal-img{
    width: calc(5.66rem * 7.5/9);
    height: 7.5rem;
    margin: 0 auto;
}
.goal-title{
    padding: 0.3rem 0;
    font-size: 0.36rem;
    text-align: center;
    line-height: 0.9rem;
    color: #282c37;
}
</style>
