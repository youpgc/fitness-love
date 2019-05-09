<template>
  <div class="pt88 bf4">
    <head-bar v-bind:head="headdata"></head-bar>
    <div class="heados">
      <div class="devices-tab dflex-between">
        <div class="tab-item" @click="changeTab(index)" :class="{'active':item.active}" v-for="(item,index) in tab" :key="index">{{item.title}}</div>
      </div>
      <div class="blog">
          <div class="blog-headline" v-if="blog.length>0">
            <div></div>
          </div>
          <div class="blog-list">
              <div class="blog-item" v-for="(item,index) in blog" :key="index">
                  <div class="blog-item-img"></div>
                  <div class="blog-item-cont"></div>
              </div>
          </div>
          <div class="list-empty">empty</div>
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
        error: require('@/assets/images/icon-26.png')
      },
      tab:[
        {title:'LATEST', active:true},
        {title:'NUTRITION', active:false},
        {title:'WORKOUT', active:false},
      ],
      blog: [],
      latest: [],
      nutrition: [],
      workout: [],
      headline: {}
    }
  },
  created(){
    this.initPage();
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
            break;
        case 1: 
            this.blog = this.nutrition;
            break;
        case 2: 
            this.blog = this.workout;
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
</style>
