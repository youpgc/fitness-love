<template>
  <div class="pb110">
    <div class="navos">
      <div class="diary-cont">
        <div class="diary-msg" @click="msgView()">
          <div class="diary-msg-img">
            <img :src="icon.msg">
            <span>{{info.msgIndex}}</span>
          </div>
        </div>
        <div class="diary-data">
          <div class="diary-data-portrait">
            <img :src="icon.portrait">
          </div>
          <div class="diary-data-greeting">
            <div>Hello <span>{{info.username}}</span> ,</div>
            <div>Things look allright.</div>
          </div>
        </div>
        <info-html v-bind:info="infoData"></info-html>
        <div class="diary-log diary-temp">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in logs" :key="index">
                <div class="log-date">
                    {{slide.date}}
                </div>
                <div class="log-cont dflex-between">
                  <div class="log-dev">
                    <label>1317</label>
                    <span>Eaten</span>
                  </div>
                  <div class="log-cal">
                    <div class="log-case">
                      <div class="log-master">
                        <label>1970</label>
                        <span>Calories left</span>
                      </div>
                      <div class="log-tag">DETAIL</div>
                    </div>
                  </div>
                  <div class="log-dev">
                    <label>768</label>
                    <span>Burned</span>
                  </div>
                </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-prev swiper-btn"><img :src="icon.prev"/></div>
          <div class="swiper-next swiper-btn"><img :src="icon.next"/></div>
        </div>
        <plan-html v-bind:plan="workout" v-if="workout.show"></plan-html>
        <plan-html v-bind:plan="breakfast" v-if="breakfast.show"></plan-html>
        <plan-html v-bind:plan="lunch" v-if="lunch.show"></plan-html>
        <plan-html v-bind:plan="dinner" v-if="dinner.show"></plan-html>
        <plan-html v-bind:plan="snack" v-if="snack.show"></plan-html>
        <plan-html v-bind:plan="water" v-if="water.show"></plan-html>
      </div>
    </div>
    <nav-bar grade="0"></nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/common/nav';
import Swiper from 'swiper';
import DB from '@/assets/js/DB';
import axios from 'axios';
import infoHtml from '@/components/dairy/info';
import planHtml from '@/components/dairy/plan';

export default {
  components: {
    navBar,
    infoHtml,
    planHtml
  },
  name: 'diaryIndex',
  data () {
    return {
      icon: {
        back: require('@/assets/images/back-07.png'),
        msg: require('@/assets/images/icon-02.png'),
        portrait: require('@/assets/images/head.png'),
        trend: require('@/assets/images/icon-03.png'),
        prev: require('@/assets/images/icon-04.png'),
        next: require('@/assets/images/icon-05.png'),
      },
      info:{
        username: 'Youpgc',
        msgIndex: '2',
      },
      infoData: {
        msg: ''
      },
      logs:[
        {title: '1317', date: 'yesterday'},
        {title: '1970', date: 'today'},
        {title: '768', date: 'tomorrow'},
      ],
      workout: {
        type: 1,
        title: 'WORKOUT PLAN',
        ref: 'workout',
        list: [{
          date: 'Today, 17:30 PM',
          text: 'Chest, Trap, Tricep, Abs',
          time: '60 mins',
          status: 'On',
          operat: false
        }],
        show: true,
      },
      breakfast: {
        type: 2,
        title: 'BREAKFAST',
        ref: 'breakfast',
        list: [
          {
            title: 'Chicken sandwich',
            cal: '632 cal',
            eat: '1 whole sandwich',
            index: 0,
            operat: false
          },
          {
            title: 'Egg substitute liquid',
            cal: '210 cal',
            eat: '1 cup (250g)',
            index: 2,
            operat: false
          }
        ],
        sum: '842 Cal',
        recom: '615 - 820 cal',
        show: true,
      },
      lunch: {
        type: 2,
        title: 'LUNCH',
        ref: 'lunch',
        list: [
          {
            title: 'Chicken sandwich Oz',
            cal: '412 cal',
            eat: '2 whole (75g)',
            index: 1,
            operat: false
          }
        ],
        sum: '412 Cal',
        recom: '731 - 975 cal',
        show: true,
      },
      dinner: {
        type: 2,
        title: 'DINNER',
        ref: 'dinner',
        list: [
          {
            title: 'Skinny buffalo chicken dip',
            cal: '1032 cal',
            eat: '2 serving',
            index: 3,
            operat: false,
          }
        ],
        sum: '1032 Cal',
        recom: '1293 cal',
        show: true,
      },
      snack: {
        type: 2,
        title: 'SNACK',
        ref: 'snack',
        list: [],
        sum: '0 Cal',
        recom: '0 - 600 cal',
        show: true
      },
      water: {
        type: 3,
        title: 'WATER',
        list: [{date: '2019-4-22 14:32',status: true}],
        empty: [1,2,3,4],
        sum: '0.4 liters',
        recom: '2 - 2.5 liters',
        show: true
      },
      swiperOption: {
          initialSlide: 1,
          loop: true,
          navigation: {
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
          },
          pagination: {
              el: '.swiper-pagination',
          },
      },
    }
  },
  created(){
    this.initDB();
  },
  mounted(){
    this.initPage();
  },
  methods: {
    initDB(){
      var dbkey = [
        {key: 'base', name: 'base', unique: true}
      ]
      DB.init('customer','data',dbkey);
    },
    initPage(){
      var _this = this;
    },
    msgView(){
      console.log('msg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .diary-cont{
    width: 100%;
    height: 100%;
    padding: 0 0.32rem;
    background-position: center -0.8rem;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('../../assets/images/back-07.png');
  }
  .diary-msg{
    display: block;
    padding: 0.26rem 0;
    overflow: hidden;
  }
  .diary-msg-img{
    width: 0.4rem;
    height: 0.48rem;
    float: right;
    margin-right: 0.16rem;
    position: relative;
  }
  .diary-msg-img span{
    position: absolute;
    right: -0.14rem;
    top: -0.16rem;
    width: 0.28rem;
    height: 0.28rem;
    padding: 0.04rem 0;
    line-height: 1;
    color: #ff5e3a;
    border-radius: 50%;
    background: #fff;
    font-size: 0.2rem; 
    font-weight: bold;
  }
  .diary-data{
    width: 100%;
    height: 1rem;
    margin-bottom: 0.48rem;
    overflow: hidden;
  }
  .diary-data-portrait{
    float: left;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .diary-data-greeting{
    float: left;
    margin-left: 0.3rem;
    padding: 0.1rem 0;
    color: #fff;
    text-align: left;
    font-size: 0.3rem;
    font-weight: normal;
    line-height: 0.4rem;
  }
  .diary-data-greeting span{
    font-weight: bold;
  }
  .diary-temp{
    background: #fff;
    box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    margin-bottom: 0.3rem;
  }
  
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
    color: #282c37;
  }
  .log-dev span{
    display: block;
    color: #6d819c;
  }
  .log-cal{
    width: calc(100% - 3rem);
    position: relative;
  }
  .log-case{
    width: 2.6rem;
    height: 2.6rem;
    margin: 0 auto;
    border: 0.12rem solid #e9e9e9;
    border-radius: 50% 50%;
  }
  .log-master{
    padding-top: 0.8rem;
    line-height: 1;
  }
  .log-master label{
    display: block;
    color: #282c37;
    font-size: 0.6rem;
  }
  .log-master span{
    display: block;
    color: #6d819c;
    font-size: 0.36rem;
  }
  .log-tag{
    width: 1.02rem;
    height: 0.42rem;
    line-height: 0.4rem;
    color: #6d819c;
    background: #fff;
    font-size: 0.2rem;
    font-weight: bold;
    border: 0.04rem solid #e9e9e9;
    border-radius: 0.21rem;
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,0);
  }
</style>
