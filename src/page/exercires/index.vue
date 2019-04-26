<template>
  <div class="pt88 pb110 bf4">
    <head-bar v-bind:head="headData"></head-bar>
    <div class="os">
      <div class="ele-search shadow">
        <div class="ele-search-input">
          <router-link to="/exeSearch">Search exercise</router-link>
        </div>
      </div>
      <div class="ele-cont">
        <div class="ele-more">
          <router-link :to="item.link" class="ele-more-item shadow" v-for="(item,index) in moreList" :key="index">
            <div class="ele-more-img">
              <img :src="item.icon">
            </div>
            <div class="ele-more-title ellipsis">{{item.title}}</div>
          </router-link>
        </div>
        <div class="ele-recent shadow">
          <div class="recent-title bbse9">YOUR RENCENT ADDED</div>
          <div class="recent-list">
            <div class="recent-item" :class="{'bbse9':index < addList.length - 1}" v-for="(item,index) in addList" :key="index">
              <div class="recent-item-title ellipsis">{{item.title}}</div>
              <div class="recent-result">
                  <div class="recent-result-item">
                      <img class="recent-icon-cal" :src="icon.cal"/>
                      <span>{{item.cal}}</span>
                  </div>
                  <div class="recent-result-item">
                      <img class="recent-icon-time" :src="icon.time"/>
                      <span>{{item.time}}</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-bar grade="1"></nav-bar>
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
  name: 'exeIndex',
  data () {
    return {
      headData: {
        text: 'Exercises Guide'
      },
      icon: {
        cal: require('@/assets/images/icon-09.png'),
        time: require('@/assets/images/icon-07.png')
      },
      search: '',
      moreList: [
        {title: 'Auto Tracking', icon: require('@/assets/images/more-05.png'), link: '/'},
        {title: 'List of Exercises', icon: require('@/assets/images/more-09.png'), link: '/'},
        {title: 'User\'s Exercises', icon: require('@/assets/images/more-10.png'), link: '/'},
        {title: 'User\'s Workout Plan', icon: require('@/assets/images/more-08.png'), link: '/'}
      ],
      addList: [
        {title: 'Aerial Hoop', cal: '220 cal', time: '15 mins'},
        {title: 'Bench press - with bands', cal: '250 cal', time: '10 mins'}
      ],
    }
  },
  created(){
    this.initPage();
  },
  methods: {
    initPage(){

    }
  }
}
</script>

<style scoped>
  .ele-search{
    height: 1.5rem;
    padding: 0.3rem;
    background: #fff;
  }
  .ele-search-input{
    width: 100%;
    height: 100%;
    padding: 0 0.3rem 0 0.8rem;
    border-radius: 0.1rem;
    border: 1px solid #ddd;
    background-image: url('../../assets/images/icon-24.png');
    background-position: 0.3rem center;
    background-repeat: no-repeat;
    background-size: 0.44rem 0.44rem;
  }
  .ele-search-input a{
    display: block;
    line-height: 0.9rem;
    padding-left: 0.1rem;
    color: #888;
    font-size: 0.26rem;
    text-align: left;
  }
  .ele-cont{
    height: calc(100% - 1.7rem);
    margin-top: 0.2rem;
    overflow: scroll;
  }
  .ele-more{
    padding: 0.12rem 0.32rem 0;
    overflow: hidden;
  }
  .ele-more-item{
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
  .ele-more-item:nth-child(even){
    margin-right: 0;
  }
  .ele-more-img{
    width: 1.28rem;
    height: 1.28rem;
    margin: 0 auto;
  }
  .ele-more-title{
    line-height: 1rem;
    padding: 0 0.16rem;
    font-size: 0.28rem;
    font-weight: bold;
  }
  .ele-recent{
    text-align: left;
    margin: 0.3rem;
    background: #fff;
    border-radius: 0.1rem;
  }
  .recent-title{
    height: 0.86rem;
    line-height: 0.86rem;
    padding-left: 0.3rem;
    font-size: 0.32rem;
    font-weight: bold;
  }
  .recent-list{
    overflow: hidden;
  }
  .recent-item{
    padding: 0.4rem 0.3rem 0.3rem 0.3rem;
  }
  .recent-item-title{
    margin-bottom: 0.2rem;
  }
  .recent-result-item{
    display: inline;
    margin-right: 0.5rem;
  }
  .recent-result-item span{
    font-size: 0.28rem;
    color: #6d819c;
 }
  .recent-icon-cal{
    width: 0.2rem;
    height: 0.29rem;
  }
  .recent-icon-time{
    width: 0.25rem;
    height: 0.25rem;
  }
</style>
