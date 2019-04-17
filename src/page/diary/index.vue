<template>
  <div class="pb110">
    <div class="navos">
      <div class="diary-cont">
        <div class="diary-msg">
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
        <div class="diary-info dflex-between">
          <div class="diary-info-item">
            <div class="diary-info-label">Your goal</div>
            <div class="diary-info-blod">Gain weight</div>
          </div>
          <div class="diary-info-item">
            <div class="diary-info-label">Latest weight, Jan 22</div>
            <div class="dflex-between">
              <div>74<span>kg</span></div>
              <div class="diary-info-trend"><img :src="icon.trend"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-bar grade="0"></nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/common/nav';
import DB from '@/assets/js/DB';
import axios from 'axios';
export default {
  components: {
    navBar
  },
  name: 'diaryIndex',
  data () {
    return {
      show: false,
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
    }
  },
  created(){
    this.show = true;
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
      // setTimeout(function(){
      //   console.log(DB.db)
      //   _this.$router.push({
      //     path: '/register',
      //     name: 'register'
      //   });
      // },100)
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
  .diary-info{
    width: 100%;
    height: 1.85rem;
    background: #fff;
    box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    position: relative;
  }
  .diary-info::after{
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,0);
    height: 100%;
    border: 0.5px solid #ddd;
  }
  .diary-info-item{
    width: 100%;
    padding: 0.3rem 0;
  }
  .diary-info-label{
    font-size: 0.3rem;
    color: #6d819c;
  }
  .diary-info-blod{
    line-height: 1rem;
    font-size: 0.5rem;
  }
  .diary-info-trend{
    width: 1.06rem;
    height: 0.54rem;
  }
</style>
