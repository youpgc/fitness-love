<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata" @headfun="share" @headicon="collect"></head-bar>
    <div class="heados">
      <div class="bloginfo-title">{{info.title}}</div>
      <div class="bloginfo-status">
          <div class="bloginfo-status-item">
              <img :src="icon.time"/>
              <span>{{info.time}}</span>
          </div>
          <div class="bloginfo-status-item">
              <img :src="icon.status"/>
              <span>{{info.status}}</span>
          </div>
      </div>
      <div class="bloginfo-img"><img :src="info.img"></div>
      <div class="bloginfo-text" v-html="info.text"></div>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/common/head';

export default {
  components: {
    headBar
  },
  name: 'blogInfo',
  data () {
    return {
      headdata: {
        src: require('@/assets/images/icon-30.png'),
        text: '',
        icon: require('@/assets/images/icon-36.png'),
        icon1: require('@/assets/images/icon-51.png')
      },
      icon: {
          time: require('@/assets/images/icon-07.png'),
          status: require('@/assets/images/icon-35.png')
      },
      info: {
          title: 'Design Your Diet To Fight Chronic Inflammation',
          time: 'Jan 30, 2018',
          status: 'Nutrition',
          img: require('@/assets/images/pic-07.jpg'),
          text: `<div>
                    <p style="padding:0.2rem 0 0.4rem">
                        Pepole talk a lot about inflammation these 
                        days: What it is, where it begins, what consequences 
                        it produces, and of course, how you can fight it. 
                        Depending on who you're listening to, it's either an 
                        unavoidable part of modern life——and the modern 
                        diet——or something you can control or avoid.
                    </p>
                    <p>
                        After doing a lot of researh and experimentation, 
                        I find myself in the middle. In other words, I believe 
                        you have some power over inflammation, but you have 
                        to be serious and methodical in how you approach it.
                    </p>
                </div>`
      }
    }
  },
  created(){
    this.initPage();
  },
  methods: {
    initPage(){
      
    },
    share(){
        console.log('share')
    },
    collect(){
        console.log('collect')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bloginfo-title{
    font-size: 0.48rem;
    color: #282c37;
    line-height: 0.6rem;
    padding: 0 0.3rem;
    text-align: left;
}
.bloginfo-status{
    padding: 0.2rem 0.3rem;
    text-align: left;
}
.bloginfo-status-item{
    display: inline-block;
    margin-right: 0.5rem;
}
.bloginfo-status-item img{
    width: 0.25rem;
    height: 0.25rem;
}
.bloginfo-status-item span{
    font-size: 0.28rem;
}
.bloginfo-img{
    width: 100%;
    height: 4.5rem;
}
.bloginfo-text{
    text-align: left;
    font-size: 0.32rem;
    padding: 0.2rem 0.5rem;
    color: #282c37;
}
</style>
