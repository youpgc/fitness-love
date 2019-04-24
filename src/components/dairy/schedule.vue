<template>
    <div class="diary-log">
        <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in schedule" :key="index">
            <div class="log-date">
                {{slide.date}}
            </div>
            <div class="log-cont dflex-between">
                <div class="log-dev">
                    <label>{{slide.eaten}}</label>
                    <span>Eaten</span>
                </div>
                <log-cal v-bind:cal="slide" class="log-cal"></log-cal>
                <div class="log-dev">
                    <label>{{slide.burned}}</label>
                    <span>Burned</span>
                </div>
            </div>
        </swiper-slide>
        </swiper>
        <div class="swiper-prev swiper-btn"><img :src="icon.prev"/></div>
        <div class="swiper-next swiper-btn"><img :src="icon.next"/></div>
    </div>
</template>

<script>
import logCal from '@/components/dairy/logCal';
export default {
    props: ["schedule"],
    components: {
        logCal
    },
    name: 'schedule',
    data(){
        return {
            icon: {
                prev: require('@/assets/images/icon-04.png'),
                next: require('@/assets/images/icon-05.png'),
            },
            swiperOption: {
                initialSlide: 1,
                navigation: {
                    prevEl: '.swiper-prev',
                    nextEl: '.swiper-next',
                },
                pagination: {
                    el: '.swiper-pagination',
                }
            },
            calData: {}
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){
            
        }
    }
}
</script>

<style scoped>
  .diary-log{
    width: 100%;
    height: 4.3rem;
    position: relative;
  }
  .swiper-btn{
    position: absolute;
    top: 0.3rem;
    z-index: 9;
    width: 0.48rem;
    height: 0.48rem;
    outline: none;
  }
  .swiper-prev{
    left: 0.3rem;
  }
  .swiper-next{
    right: 0.3rem;
  }
  .log-date{
    line-height: 1rem;
  }
  .log-cont{
    padding: 0 0.3rem;
    margin-top: 0.2rem;
    height: 2.6rem;
  }
  .log-dev{
    width: 1.5rem;
    padding-top: 1.1rem;
  }
  .log-dev label{
    display: block;
    font-size: 0.48rem;
    color: #282c37;
  }
  .log-dev span{
    display: block;
    font-size: 0.28rem;
    color: #6d819c;
  }
  .log-cal{
    width: calc(100% - 3rem);
    height: 100%;
    position: relative;
  }
  .log-case{
    width: 2.6rem;
    height: 2.6rem;
    margin: 0 auto;
    border: 0.12rem solid #e9e9e9;
    border-radius: 50% 50%;
  }
</style>