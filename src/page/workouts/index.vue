<template>
  <div class="pt88 pb110">
    <head-bar v-bind:head="headData" @headfun="getNew()"></head-bar>
    <div class="os">
      <div class="workout-tab dflex-between">
        <div class="tab-item" 
          @click="changeTab(index)" 
          :class="{'tab-item-act':item.show}" 
          v-for="(item,index) in tab" 
          :key="index">
            {{item.title}}
        </div>
      </div>
      <div class="workout-cont">
        <div class="workout-stock" v-if="onTab == 0">
          <div class="stock-item" :style="'background-image: url('+item.image+')'" v-for="(item,index) in stock" :key="index">
            <div class="stock-cont">
              <div class="stock-title">{{item.title}}</div>
              <div class="stock-result">
                <div class="stock-result-item">
                  <div class="stock-result-img">
                    <img :src="icon.time">
                  </div>
                  <div class="stock-result-title">{{item.time}}</div>
                </div>
                <div class="stock-result-item">
                  <div class="stock-result-img">
                    <img :src="icon.grade">
                  </div>
                  <div class="stock-result-title">{{item.grade}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="workout-plans" v-if="onTab == 1">
          <div class="plan-item" :style="'background-image: url('+item.image+')'" v-for="(item,index) in plans" :key="index">
            <div class="stock-cont">
              <div class="stock-title">{{item.title}}</div>
              <div class="stock-result">
                <div class="stock-result-item">
                  <div class="stock-result-img">
                    <img :src="icon.time">
                  </div>
                  <div class="stock-result-title">{{item.time}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-bar grade="3"></nav-bar>
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
  name: 'workIndex',
  data () {
    return {
      headData: {
        text: 'Workout Plans',
        iconclass: 'icon-search',
      },
      icon: {
        search: require('@/assets/images/icon-24.png'),
        add: require('@/assets/images/icon-37.png'),
        time: require('@/assets/images/icon-33.png'),
        grade: require('@/assets/images/icon-34.png')
      },
      tab: [
        {title: 'PLANS STOCK', show: true},
        {title: 'MY PLANS', show: false},
      ],
      onTab: 0,
      stock: [
        {title: 'General Traning', time: '12 Weeks', grade: 'Beginner', image: require('@/assets/images/pic-14.jpg')},
        {title: 'Jay Cutler\'s 8-Weeks Mass-Building Trainer', time: '8 Weeks', grade: 'Advanced', image: require('@/assets/images/pic-20.jpg')},
      ],
      plans: [
        {title: 'Weider (Chest Special)', time: '12 Weeks', image: require('@/assets/images/pic-16.jpg')},
        {title: 'Abs Home Workout', time: '8 Weeks', image: require('@/assets/images/pic-17.jpg')},
      ],
    }
  },
  created(){
    this.headData.icon = this.icon.search;
    this.initPage();
  },
  methods: {
    initPage(){

    },
    getNew(){
      if(this.onTab){
        //添加
        console.log('add')
      }else{
        //搜索
        console.log('search')
      }
    },
    changeHead(){
      if(this.onTab){
        this.headData.icon = this.icon.add;
        this.headData.iconclass = 'icon-add';
      }else{
        this.headData.icon = this.icon.search;
        this.headData.iconclass = 'icon-search';
      }
    },
    changeTab(index){
      this.tab.map(item=>{
        item.show=false;
      })
      this.tab[index].show = true;
      this.onTab = index;
      this.changeHead();
    },
  }
}
</script>

<style scoped>
  .workout-tab{
    height: 1rem;
    line-height: 1rem;
  }
  .tab-item{
    width: 100%;
    font-size: 0.3rem;
    color: #6d819c;
  }
  .tab-item-act{
    color: #ff5e3a;
    border-bottom: 0.04rem solid #ff5e3a;
  }
  .workout-cont{
    height: calc(100% - 1.1rem);
    overflow: scroll;
  }
  .workout-stock, .workout-plans{
    overflow: hidden;
  }
  .stock-item, .plan-item{
    width: 100%;
    height: 4.5rem;
    text-align: left;
    position: relative;
    background-color: #262626;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    color: #fff;
  }
  .stock-title{
    line-height: 0.6rem;
    font-size: 0.48rem;
  }
  .stock-cont{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 0.3rem; 
  }
  .stock-result-item{
    display: inline-block;
    line-height: 1rem;
    margin-right: 0.5rem;
  }
  .stock-result-img{
    display: inline-block;
    width: 0.24rem;
    height: 0.26rem;
  }
  .stock-result-title{
    display: inline-block;
    font-size: 0.3rem;
  }
</style>
