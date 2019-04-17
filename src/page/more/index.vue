<template>
  <div class="pt88 pb110 bf4">
    <head-bar v-bind:head="headdata" class="shadow"></head-bar>
    <div class="os">
      <div class="more-list">
        <div class="more-item shadow" v-for="(item,index) in moreList" :key="index" @click="getItem(index,item.title)">
          <div class="item-img">
            <img :src="item.icon">
          </div>
          <div class="item-title">{{item.title}}</div>
        </div>
      </div>
    </div>
    <nav-bar grade="4"></nav-bar>
  </div>
</template>

<script>
import headBar from '@/components/common/head';
import navBar from '@/components/common/nav';

export default {
  components: {
    headBar,
    navBar
  },
  name: 'moreIndex',
  data () {
    return {
      headdata: {
        src: '',
        text: 'More'
      },
      moreList: [
        {title: 'Udgrade Pro', icon: require('@/assets/images/more-01.png'), link: ''},
        {title: 'My Profile', icon: require('@/assets/images/more-02.png'), link: ''},
        {title: 'My Food and Recipes', icon: require('@/assets/images/more-03.png'), link: ''},
        {title: 'Graph', icon: require('@/assets/images/more-04.png'), link: ''},
        {title: 'Apps & Devices', icon: require('@/assets/images/more-05.png'), link: ''},
        {title: 'Blog', icon: require('@/assets/images/more-06.png'), link: ''},
        {title: 'Help', icon: require('@/assets/images/more-07.png'), link: ''},
        {title: 'Settings', icon: require('@/assets/images/more-08.png'), link: ''},
      ]
    }
  },
  created(){
    this.initPage();
  },
  methods: {
    initPage(){

    },
    getItem(index,title){
      console.log(index,title);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .more-list{
    padding: 0.32rem 0.32rem 0;
    overflow: hidden;
  }
  .more-item{
    display: block;
    float: left;
    width: calc(50% - 0.16rem);
    height: 3rem;
    padding-top: 0.48rem;
    background: #fff;
    border-radius: 0.2rem;
    margin-right: 0.32rem;
    margin-bottom: 0.32rem;
  }
  .more-item:nth-child(even){
    margin-right: 0;
  }
  .item-img{
    width: 1.28rem;
    height: 1.28rem;
    margin: 0 auto;
  }
  .item-title{
    line-height: 1rem;
    font-size: 0.28rem;
    font-weight: bold;
  }
</style>
