<template>
  <div class="pt88 bf4">
    <head-bar v-bind:head="headdata"></head-bar>
    <div class="heados">
      <div class="devices-tab dflex-between shadow">
        <div class="tab-item" @click="changeTab(index)" :class="{'active':item.active}" v-for="(item,index) in tab" :key="index">{{item.title}}</div>
      </div>
      <div class="blog">
          <router-link :to="headline.href" class="blog-headline" v-if="blog.length>0" :style="'background-image:url('+headline.headImg+')'">
            <div class="headline-cont">
              <div class="headline-title linethree">{{headline.title}}</div>
              <div class="headline-status">
                <div class="headline-status-item">
                  <img :src="icon.head_time"/>
                  <span>{{headline.time}}</span>
                </div>
                <div class="headline-status-item">
                  <img :src="icon.head_status"/>
                  <span>{{headline.status}}</span>
                </div>
              </div>
            </div>
          </router-link>
          <div class="blog-list" v-if="blog.length>0">
              <router-link :to="item.href" class="blog-list-item dflex-between shadow" v-for="(item,index) in blog" :key="index" v-show="index > 0">
                  <div class="blog-item-img"><img :src="item.photo"/></div>
                  <div class="blog-item-cont">
                    <div class="blog-item-title linethree">{{item.title}}</div>
                    <div class="blog-item-status">
                      <div class="blog-status-item">
                        <img :src="icon.time"/>
                        <span>{{item.time}}</span>
                      </div>
                      <div class="blog-status-item">
                        <img :src="icon.status"/>
                        <span>{{item.status}}</span>
                      </div>
                    </div>
                  </div>
              </router-link>
              <div class="list-empty" v-if="blog.length==1">no more</div>
          </div>
          <div class="list-empty" v-if="blog.length==0">empty</div>
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
  name: 'blog',
  data () {
    return {
      headdata: {
        src: require('@/assets/images/icon-30.png'),
        text: 'Blog'
      },
      icon: {
        correct: require('@/assets/images/icon-25.png'),
        error: require('@/assets/images/icon-26.png'),
        time: require('@/assets/images/icon-07.png'),
        status: require('@/assets/images/icon-35.png'),
        head_time: require('@/assets/images/icon-33.png'),
        head_status: require('@/assets/images/icon-34.png')
      },
      tab:[
        {title:'LATEST', active:true},
        {title:'NUTRITION', active:false},
        {title:'WORKOUT', active:false},
      ],
      blog: [],
      headline: {},
      latest: [
        {
          headImg: require('@/assets/images/pic-01.jpg'),
          photo: require('@/assets/images/pic-01.jpg'),
          title: "The 6 Grittiest Paired Sets You're Not Doing",
          time: 'Jan 30, 2018',
          status: 'Workout',
          href: '/blogInfo'
        },
        {
          headImg: require('@/assets/images/pic-02.jpg'),
          photo: require('@/assets/images/pic-02.jpg'),
          title: "Use The Microwave For These Meal-Prep Staples",
          time: 'Jan 30, 2018',
          status: 'Nutrition',
          href: '/blogInfo'
        },
        {
          headImg: require('@/assets/images/pic-03.jpg'),
          photo: require('@/assets/images/pic-03.jpg'),
          title: "The Bodybuilder's Guide To A Better Bench Press",
          time: 'Jan 30, 2018',
          status: 'Workout',
          href: '/blogInfo'
        }
      ],
      nutrition: [
        {
          headImg: require('@/assets/images/pic-07.jpg'),
          photo: require('@/assets/images/pic-07.jpg'),
          title: 'Design Your Diet To Fight Chronic infkammation',
          time: 'Jan 30, 2018',
          status: 'Beginner',
          href: '/blogInfo'
        },
        {
          headImg: require('@/assets/images/pic-04.jpg'),
          photo: require('@/assets/images/pic-04.jpg'),
          title: "4 Reasons Why You Should Be Intermittent Fasting",
          time: 'Jan 30, 2018',
          status: 'Workout',
          href: '/blogInfo'
        },
        {
          headImg: require('@/assets/images/pic-05.jpg'),
          photo: require('@/assets/images/pic-05.jpg'),
          title: "The UItimate Kris Gethin Muscle-Building Meal Plan",
          time: 'Jan 30, 2018',
          status: 'Workout',
          href: '/blogInfo'
        },
        {
          headImg: require('@/assets/images/pic-06.jpg'),
          photo: require('@/assets/images/pic-06.jpg'),
          title: "Your Expert Guide To Chia Seeds",
          time: 'Jan 30, 2018',
          status: 'Workout',
          href: '/blogInfo'
        },
      ],
      workout: []
    }
  },
  created(){
    this.initPage();
    this.changeTab(0);
  },
  methods: {
    initPage(){
      this.devices = this.connected;
    },
    changeTab(index){
      this.tab.map((item,index)=>{
        item.active = false;
      })
      this.tab[index].active = true;
      switch (index){
        case 0: 
            this.blog = this.latest;
            this.headline = this.latest[0] || {};
            break;
        case 1: 
            this.blog = this.nutrition;
            this.headline = this.nutrition[0] || {};
            break;
        case 2: 
            this.blog = this.workout;
            this.headline = this.workout[0] || {};
            break;
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  .blog{
    height: calc(100% - 1rem);
    overflow: hidden;
  }
  .blog-headline{
    display: block;
    width: 100%;
    height: 4.5rem;
    text-align: left;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #ccc;
    position: relative;
    overflow: hidden;
  }
  .headline-cont{
    position: absolute;
    bottom: 0.2rem;
    left: 0.3rem;
    color: #fff;
  }
  .headline-status-item, .blog-status-item{
    display: inline;
    margin-right: 0.5rem;
  }
  .headline-status-item img, .blog-status-item img{
    width: 0.25rem;
    height: 0.25rem;
  }
  .headline-status-item span, .blog-status-item span{
    font-size: 0.28rem;
  }
  .blog-list{
    overflow: scroll;
    height: calc(100% - 4.5rem);
    padding: 0.3rem 0.3rem 0;
    background: #f8faff;
  }
  .list-empty{
    line-height: 1rem;
  }
  .blog-list-item{
    background: #fff;
    margin-bottom: 0.24rem;
    border-radius: 0.1rem;
    overflow: hidden;
  }
  .blog-item-img{
    width: 2.3rem;
    height: 1.98rem;
  }
  .blog-item-cont{
    width: calc(100% - 2.3rem);
    text-align: left;
    padding: 0.3rem 0.2rem 0.16rem 0.32rem;
    position: relative;
  }
  .blog-item-title{
    font-size: 0.32rem;
    color: #282c37;
  }
  .blog-item-status{
    position: absolute;
    bottom: 0.16rem;
    left: 0.3rem;
  }
</style>
