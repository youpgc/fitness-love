<template>
  <div class="pt88 bf4">
    <head-bar v-bind:head="headData"></head-bar>
    <div class="heados headTop">
      <div class="ele-search shadow">
        <div class="ele-search-input">
          <input type="search" ref="input" v-model="search" @keyup.enter="getKeyword" placeholder="Search exercise"/>
        </div>
      </div>
      <div class="res-list">
        <div class="res-item dflex-between shadow" v-for="(item,index) in resList" :key="index" @click="getItem(item,index)">
          <div class="res-cont">
            <div class="ellipsis res-title" :class="{'res-title-select':item.select}">{{item.title}}</div>
            <div class="res-result">
              <div class="res-result-item">
                <img class="icon-cal" :src="icon.cal"/>
                <span>{{item.cal}}</span>
              </div>
              <div class="res-result-item">
                <img class="icon-time" :src="icon.time"/>
                <span>{{item.time}}</span>
              </div>
              <div class="res-result-item" v-if="item.collect">
                <img class="icon-collect" :src="icon.collect"/>
                <span>{{item.collect}}</span>
              </div>
            </div>
          </div>
          <div class="res-item-select">
            <img :src="icon.select" v-if="item.select"/>
            <img :src="icon.unselect" v-else/>
          </div>
        </div>
      </div>
      <div class="select-count" v-if="selected > 0">{{selected}} exercise selected</div>
      <router-link to="/addNewPlan" class="add-btn gradient-back">ADD TO PLAN</router-link>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/common/head';
export default {
  components: {
    headBar
  },
  name: 'exeSearch',
  data () {
    return {
      headData: {
        text: 'Exercises Guide',
        src: require('@/assets/images/icon-30.png')
      },
      icon: {
        cal: require('@/assets/images/icon-09.png'),
        time: require('@/assets/images/icon-07.png'),
        collect: require('@/assets/images/icon-22.png'),
        select: require('@/assets/images/icon-25.png'),
        unselect: require('@/assets/images/icon-26.png'),
      },
      search: '',
      selected: 0,
      resList: [
        {
          title: 'Dumbbell Bench Press',
          cal: '220 cal',
          time: '15 mins',
          collect: '9.2',
          select: false
        },{
          title: 'Dumbbell Flyes',
          cal: '220 cal',
          time: '15 mins',
          collect: '9',
          select: false
        },{
          title: 'Incline Dumbbell Press',
          cal: '220 cal',
          time: '15 mins',
          collect: '',
          select: false
        },{
          title: 'Decline Dumbbell Flyes',
          cal: '220 cal',
          time: '15 mins',
          collect: '9.5',
          select: false
        },{
          title: 'Incline Dumbbell Press Reverse Weights',
          cal: '220 cal',
          time: '15 mins',
          collect: '9.1',
          select: false
        },{
          title: 'Decline Dumbbell Bench Press',
          cal: '220 cal',
          time: '15 mins',
          collect: '',
          select: false
        },
      ]
    }
  },
  mounted(){
      this.initPage();
  },
  methods: {
    initPage(){
      this.$refs.input.focus();
    },
    getKeyword(){
      console.log(this.search);
    },
    getItem(item,index){
      var status = item.select;
      if(status){
        this.selected --;
      }else{
        this.selected ++;
      }
      item.select = !status;
    }
  }
}
</script>

<style scoped>
  .headTop{
    position: relative;
    padding-top: 1.5rem;
  }
  .ele-search{
    width: 100%;
    height: 1.5rem;
    padding: 0.3rem;
    background: #fff;
    position: absolute;
    top: 0;
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
  .ele-search-input input{
    width: 100%;
    height: 100%;
    padding: 0.2rem 0.1rem;
    font-size: 0.36rem;
  }
  .res-list{
    padding: 0.3rem 0.3rem 0;
    height: 100%;
    overflow: scroll;
  }
  .res-item{
    background: #fff;
    border-radius: 0.1rem;
    padding: 0.3rem;
    margin-bottom: 0.3rem;
  }
  .res-cont{
    text-align: left;
    width: calc(100% - 0.68rem);
  }
  .res-title{
    font-size: 0.38rem;
  }
  .res-title-select{
    color: #ff5e3a;
  }
  .res-result{
    margin-top: 0.2rem;
  }
  .res-result-item{
    display: inline;
    margin-right: 0.5rem;
  }
  .res-result-item img{
    vertical-align: middle;
  }
  .icon-cal{
    width: 0.2rem;
    height: 0.29rem;
  }
  .icon-time{
    width: 0.25rem;
    height: 0.25rem;
  }
  .icon-collect{
    width: 0.28rem;
    height: 0.28rem;
  }
  .res-result-item span{
    font-size: 0.28rem;
    color: #6d819c;
  }
  .res-item-select{
    width: 0.48rem;
    height: 0.48rem;
  }
  .select-count{
    position: fixed;
    bottom: 2.1rem;
    left: 50%;
    transform: translate(-50%, 0);
    height: 0.64rem;
    line-height: 0.64rem;
    padding: 0 0.3rem;
    font-size: 0.3rem;
    border-radius: 0.32rem;
    box-shadow: 0 0.05rem 0.1rem 0 rgba(0, 0, 0, 0.3);
    color: #fff;
    background: -webkit-linear-gradient(left, #c748fc, #5b59d6);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #c748fc, #5b59d6);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #c748fc, #5b59d6);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #c748fc, #5b59d6);
    /* 标准的语法 */
  }
  .add-btn{
    display: block;
    position: fixed;
    bottom: 0.8rem;
    left: 50%;
    transform: translate(-50%, 0);
    width: calc(100% - 0.6rem);
    height: 1rem;
    line-height: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.2);
  }
</style>
