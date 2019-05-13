<template>
  <div class="pb110">
    <div class="navos">
      <div class="diary-cont">
        <div class="diary-msg">
          <router-link to="/msgIndex" class="diary-msg-img">
            <img :src="icon.msg">
            <span>{{infoData.msgIndex}}</span>
          </router-link>
        </div>
        <div class="diary-data">
          <router-link :to="{ name:'mine',params:{'animat': true} }" class="diary-data-portrait">
            <img :src="icon.portrait">
          </router-link>
          <div class="diary-data-greeting">
            <div>Hello <span>{{infoData.username}}</span> ,</div>
            <div>Things look allright.</div>
          </div>
        </div>
        <info-html v-bind:info="infoData"></info-html>
        <schedule-html v-bind:schedule="scheduleData" class="diary-temp"></schedule-html>
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
import infoHtml from '@/components/dairy/info';
import scheduleHtml from '@/components/dairy/schedule';
import planHtml from '@/components/dairy/plan';

export default {
  components: {
    navBar,
    infoHtml,
    scheduleHtml,
    planHtml
  },
  name: 'diaryIndex',
  data () {
    return {
      loading: true,
      icon: {
        back: require('@/assets/images/back-07.png'),
        msg: require('@/assets/images/icon-02.png'),
        portrait: require('@/assets/images/head.png'),
        trend: require('@/assets/images/icon-03.png'),
        prev: require('@/assets/images/icon-04.png'),
        next: require('@/assets/images/icon-05.png'),
      },
      months:['Jan','Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'],
      localData: {},
      infoData: {
        muscle: 'Gain weight',
        date: 'Jan 22',
        weight: '74',
        username: 'Youpgc',
        msgIndex: '6'
      },
      scheduleData: [
        {calories: '1970', date: 'yesterday', logCal:'', eaten: '1842', burned: '960'},
        {calories: '1970', date: 'today', logCal: '', eaten: '1317', burned: '768'},
        {calories: '1970', date: 'tomorrow', logCal: '', eaten: '0', burned: '0'},
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
    }
  },
  created(){
    this.$loading.show();
    this.localData = window.localStorage;
    this.initDB();
    this.infoData.date = this.months[new Date().getMonth()]+' '+new Date().getDay();
  },
  mounted(){
    this.initPage();
  },
  methods: {
    initDB(){
      this.DB.init();
    },
    initPage(){
      var _this = this;
      if(_this.DB.db){
        _this.getList();
      }else{
        setTimeout(()=>{
          _this.initPage();
        },100)
      }
    },
    getList(){
      var _this = this;
      var loginStatus = false;
      new Promise((resolve, reject)=>{
        _this.DB.get(function(res){
          if(res.id){
            _this.DB.dataIndex = res.id + 1;
          }
          if(res.title == "login" && res.status){
            loginStatus = true;
            res['msgIndex'] = 6;
            var data = JSON.stringify(res);
            window.localStorage.setItem('infoData',data);
            for(let key in res){
              _this.infoData[key] = res[key];
            }
          }
          resolve()
        })
      }).then((res)=>{
        if(!loginStatus){
          _this.$toast('login failure');
          window.localStorage.clear();
          setTimeout(()=>{
            _this.$router.push({
              path: '/login',
              name: 'login',
              params: {status: true}
            })
          },1500)
        }
        _this.getViaImg();
        _this.$loading.hide()
      })
    },
    getViaImg(){
      var _this = this;
      var blob = _this.infoData.viaBlob;
      _this.icon.portrait = _this.tool.getFileURL(blob);
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
    width: 0.48rem;
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
    display: block;
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
</style>
