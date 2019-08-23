<template>
  <div class="pt88 bf4">
    <head-bar v-bind:head="headdata"></head-bar>
    <div class="heados">
      <div class="devices-tab shadow dflex-between">
        <div class="tab-item" @click="changeTab(index)" :class="{'active':item.active}" v-for="(item,index) in tab" :key="index">{{item.title}}</div>
      </div>
      <div class="devices-list">
        <div class="list-item shadow dflex-between" v-for="(item,index) in devices" :key="index" @click="getItem(item,index)">
          <div class="list-item-logo"><img :src="item.logo"></div>
          <div class="list-item-cont">
            <div class="list-item-title ellipsis">{{item.title}}</div>
            <div class="list-item-span ellipsis">{{item.span}}</div>
            <div class="list-item-unit oh">
              <img :src="icon.correct" v-if="item.status">
              <img :src="icon.error" v-else>
              <span :class="{'unselect':!item.status}">{{item.type}}</span>
            </div>
          </div>
        </div>
        <div class="list-empty" v-if="devices.length == 0">empty</div>
      </div>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/common/head';

export default {
  components: {
    headBar
  },
  name: 'devices',
  data () {
    return {
      headdata: {
        src: require('@/assets/images/icon-30.png'),
        text: 'App & Devices'
      },
      icon: {
        correct: require('@/assets/images/icon-25.png'),
        error: require('@/assets/images/icon-26.png')
      },
      tab:[
        {title:'CONNECTED (0)', active:true},
        {title:'ALL', active:false}
      ],
      devices: [],
      connectIndex: 0,
      connected: [],
      all: [
        {logo: require('@/assets/images/pic-06.png'), title: 'Google Fit', span: 'Google LLC', type: 'Connected', status: false},
        {logo: require('@/assets/images/pic-07.png'), title: 'Healthkit', span: 'Apple Inc', type: 'Connected', status: true},
        {logo: require('@/assets/images/pic-08.png'), title: 'Runkeeper', span: 'FitnessKeeper, Inc', type: 'Connected', status: true},
        {logo: require('@/assets/images/pic-09.png'), title: 'Connect Mobile', span: 'Garmin Ltd', type: 'Connected', status: false},
        {logo: require('@/assets/images/pic-10.png'), title: 'Fitbit', span: 'Fitbit, Inc', type: 'Connected', status: false},
      ]
    }
  },
  created(){
    this.render();
  },
  methods: {
    changeTab(index){
      this.tab.map((item,index)=>{
        item.active = false;
      })
      this.tab[index].active = true;
      if(index==0){
        this.devices = this.connected;
      }else{
        this.devices = this.all;
      }
    },
    render(){
      this.connectIndex = 0;
      var arr = [];
      this.all.map(item=>{
        if(item.status){
          arr.push(item);
          this.connectIndex ++;
        }
      })
      this.connected = arr;
      this.tab[0].title = 'CONNECTED ('+this.connectIndex+')';
      if(this.tab[0].active){
        this.devices = this.connected;
      }else{
        this.devices = this.all;
      }
    },
    getItem(item,index){
      item.status = !item.status;
      this.render();
    }
  }
}
</script>

<style scoped>
  .devices-tab{
    height: 1rem;
    line-height: 1rem;
    background: #fff;
  }
  .tab-item{
    width: 100%;
    text-align: center;
    font-size: 0.26rem;
    font-weight: bold;
  }
  .active{
    color: #ff5e3a;
    border-bottom: 0.04rem solid #ff5e3a;
  }
  .devices-list{
    padding: 0.3rem;
    height: calc(100vh - 1.88rem);
    overflow: scroll;
  }
  .list-item{
    background: #fff;
    border-radius: 0.1rem;
    margin-bottom: 0.3rem;
    padding: 0.4rem 0.5rem;
  }
  .list-item:last-child{
    margin-bottom: 0;
  }
  .list-item-logo{
    width: 1.62rem;
  }
  .list-item-cont{
    flex: 1;
    padding-left: 0.6rem;
    text-align: left;
  }
  .list-item-title{
    font-size: 0.5rem;
    color: #282c37;
  }
  .list-item-span{
    font-size: 0.3rem;
    color: #6d819c;
    line-height: 0.8rem;
  }
  .list-item-unit img{
    float: left;
    width: 0.36rem;
    height: 0.36rem;
  }
  .list-item-unit span{
    float: left;
    margin-left: 0.1rem;
    line-height: 0.38rem;
    font-size: 0.3rem;
    color: #ff5e3a;
  }
  .unselect{
    color: #e2e2e2 !important;
  }
  .list-empty{
    color: #999;
    line-height: 1rem;
  }
</style>
