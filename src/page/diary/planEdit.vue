<template>
  <div class="pt88">
    <head-bar v-bind:head="headData"></head-bar>
    <div class="bf4 heados">
      <calendar @viewStick="getStick" class="shadow"></calendar>
      <div class="plan-list" :style="'height:calc(100% - 1.82rem - ' + 0.9*stick + 'rem'">
        <div class="plan-item diary-temp" v-for="(item,index) in planList" :key="index">
          <div class="plan-item-time ellipsis"><i :style="'background:'+color[index]" class="plan-time-tag"></i><span>{{item.date}}</span></div>
          <div class="plan-item-title">{{item.title}}</div>
          <div class="plan-item-tag">
            <div class="plan-tag-item">
              <img :src="icon.time"/>
              <span>{{item.time}}</span>
            </div>
            <div class="plan-tag-item">
              <img :src="icon.status"/>
              <span>{{item.status}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-btn gradient-back">ADD NEW PLAN</div>
    </div>
  </div>
</template>
<script>
import headBar from '@/components/common/head';
import calendar from '@/components/common/calendar';
export default {
  name: "plan",
  components: {
    headBar,
    calendar
  },
  data() {
    return {
      headData: {
        text: '',
        src: require('@/assets/images/icon-30.png')
      },
      icon: {
        time: require('@/assets/images/icon-07.png'),
        status: require('@/assets/images/icon-08.png')
      },
      color: ['#5ac8fb','#44db5e', '#ff9500', '#5856d6', '#d81159', '#ff5e3a', '#4083ff'],
      stick: 0,
      planList: [
        {title:'Running', time: '20 mins', status: 'On', date: 'Today, 8:30 AM'},
        {title:'Chest, Trap, Tricep, Abs', time: '60 mins', status: 'On', date: 'Today, 17:30 PM'},
        {title:'Abs, Running', time: '30 mins', status: 'On', date: 'Today, 18:30 PM'}
      ],
      msg: "plan"
    };
  },
  methods: {
    init(){
        
    },
    getStick(length){
      this.stick = length;
    }
  }
};
</script>

<style scoped>
.plan-list{
  padding: 0.3rem 0.3rem 1.2rem 0.3rem;
  overflow: scroll;
}
.plan-item{
     text-align: left;
     padding: 0.2rem 0.3rem;
     position: relative;
     transition: 0.3s;
 }
 .plan-item-time{
     height: 0.6rem;
     line-height: 0.6rem;
     font-size: 0.28rem;
     color: #6d819c;
     padding-left: 0.3rem;
     position: relative;
 }
 .plan-time-tag{
     width: 0.2rem;
     height: 0.2rem;
     border-radius: 50%;
     background: #5856d6;
     position: absolute;
     left: 0;
     top: 50%;
     transform: translate(0,-50%);
 }
 .plan-item-title{
     font-size: 0.5rem;
 }
 .plan-item-tag{
     margin-top: 0.1rem;
 }
 .plan-tag-item{
     display: inline;
     margin-right: 0.5rem;
 }
 .plan-tag-item img{
     width: 0.25rem;
     height: 0.25rem;
     vertical-align: middle;
 }
 .plan-tag-item span{
  font-size: 0.28rem;
  color: #6d819c;
 }
 .flex-btn{
   width: 6.5rem;
   height: 1rem;
   line-height: 1rem;
   font-size: 0.3rem;
   font-weight: bold;
   border-radius: 0.5rem;
   box-shadow: 0 0.05rem 0.2rem rgba(0, 0, 0, 0.5);
   position: fixed;
   z-index: 9;
   left: 50%;
   bottom: 0.2rem;
   transform: translate(-50%, 0);
 }
</style>
