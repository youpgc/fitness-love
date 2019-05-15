<template>
  <div class="pt88 bf4">
    <head-bar v-bind:head="headData" class="shadow"></head-bar>
    <div class="heados">
      <div class="autoList">
          <div class="autoList-item shadow dflex-between" v-for="(item,index) in autoList" :key="index" @click="getItem(item,index)">
              <div class="autoList-item-logo"><img :src="item.logo"></div>
              <div class="autoList-item-cont">
                  <div class="autoList-item-title ellipsis">{{item.title}}</div>
                  <div class="autoList-item-span ellipsis">{{item.span}}</div>
                  <div class="autoList-item-status" v-if="item.select">
                      <img :src="icon.select"/>
                      <span>Connected</span>
                  </div>
              </div>
          </div>
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
  name: 'autoTrack',
  data () {
    return {
      headData: {
        text: "Auto Tracking",
        src: require('@/assets/images/icon-30.png')
      },
      icon: {
          select: require('@/assets/images/icon-25.png')
      },
      autoList: [
        {
            logo: require('@/assets/images/pic-06.png'),
            title: 'Google Fit',
            span: 'Google LLc',
            select: false
        }, {
            logo: require('@/assets/images/pic-07.png'),
            title: 'Healthkit',
            span: 'Apple Inc',
            select: false
        }, {
            logo: require('@/assets/images/pic-08.png'),
            title: 'Runkeeper',
            span: 'FitnessKeeper, Inc',
            select: false
        }, {
            logo: require('@/assets/images/pic-09.png'),
            title: 'Connect Mobile',
            span: 'Garmin Ltd',
            select: false
        }, {
            logo: require('@/assets/images/pic-10.png'),
            title: 'Fitbit',
            span: 'Fitbit, Inc',
            select: false
        }
      ]
    }
  },
  mounted(){
      this.initPage();
  },
  methods: {
    initPage(){
      
    },
    getItem(item,index){
        item.select = !item.select;
    }
  }
}
</script>

<style scoped>
    .autoList{
        padding: 0.3rem 0.3rem 0;
    }
    .autoList-item{
        background: #fff;
        border-radius: 0.1rem;
        padding: 0.5rem;
        position: relative;
        margin-bottom: 0.3rem;
    }
    .autoList-item-logo{
        width: 1.6rem;
    }
    .autoList-item-cont{
        width: calc(100% - 3.2rem);
        text-align: left;
        position: absolute;
        left: 2.6rem;
        top: 50%;
        transform: translate(0, -50%);
    }
    .autoList-item-title{
        font-size: 0.48rem;
    }
    .autoList-item-span{
        font-size: 0.28rem;
        margin: 0.08rem 0 0.12rem 0;
        color: #6d819c;
    }
    .autoList-item-status{
        color: #ff5e3a;
        font-size: 0.28rem;
    }
    .autoList-item-status img{
        width: 0.32rem;
        height: 0.32rem;
        vertical-align: text-top;
    }
</style>
