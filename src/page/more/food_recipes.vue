<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata"></head-bar>
    <div class="heados bcf8">
      <div class="devices-tab dflex-between shadow">
        <div class="tab-item" @click="changeTab(index)" :class="{'active':item.active}" v-for="(item,index) in tab" :key="index">{{item.title}}</div>
      </div>
      <div class="list">
        <div class="list-item dflex-between shadow" v-for="(item,index) in list" :key="index" @click="getItem(item,index)">
          <div class="list-item-head" v-if="createIndex==0">
            <div class="list-item-index" :style="item.style">{{item.index}}</div>
            <div class="list-item-status">
              <img :src="icon.select" v-if="item.select">
              <img :src="icon.unselect" v-else>
            </div>
          </div>
          <div class="list-item-cont">
            <div class="list-item-title ellipsis">{{item.title}}</div>
            <div class="list-item-detail">
              <div class="list-detail-item" v-if="createIndex==0">
                <img class="icon-cal" :src="icon.cal">
                <span>{{item.cal}}</span>
              </div>
              <div class="list-detail-item">
                <img class="icon-val" :src="icon.val">
                <span>{{item.val}}</span>
              </div>
              <div class="list-detail-item" v-if="createIndex>0">
                <img class="icon-cal" :src="icon.cal">
                <span>{{item.cal}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list-empty" v-if="list.length==0">empty</div>
        <div class="create-btn gradient-back">{{createText}}</div>
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
  name: 'food_recipes',
  data () {
    return {
      headdata: {
        src: require('@/assets/images/icon-30.png'),
        text: 'My Food and Recipes',
      },
      icon: {
        cal: require('@/assets/images/icon-09.png'),
        val: require('@/assets/images/icon-10.png'),
        select: require('@/assets/images/icon-11.png'),
        unselect: require('@/assets/images/icon-45.png')
      },
      AJ: ['A','B','C','D','E','F','G','H','I','J'],
      color: ['#5ac8fb','#44db5e', '#ff9500', '#5856d6', '#d81159', '#ff5e3a', '#4083ff'],
      tab:[
        {title:'FOOD', active:true},
        {title:'RECIPES', active:false},
        {title:'MEALS', active:false},
      ],
      list: [],
      food: [
        {
          index: '- -',
          select: false,
          title: 'Skinny Buffalo Chicken Dip',
          cal: '270 cal',
          val: '1 whole sandwich',
          style: ''
        },{
          index: '- -',
          select: false,
          title: 'Salmin-salad-stuffed Avocado',
          cal: '374 cal',
          val: '1 whole sandwich',
          style: ''
        },{
          index: '- -',
          select: false,
          title: 'Fish Burger',
          cal: '249 cal',
          val: '1 whole sandwich',
          style: ''
        },{
          index: '- -',
          select: false,
          title: 'One Pot Beef Skillet',
          cal: '372 cal',
          val: '1 cup (300g)',
          style: ''
        },{
          index: '- -',
          select: false,
          title: 'Broccoli And Chicken Salad',
          cal: '270 cal',
          val: '1 whole sandwich',
          style: ''
        }
      ],
      recipes: [
        {
          title: 'Workout Energy Salad',
          cal: '372 cal/serving',
          val: '4 serving'
        }
      ],
      meals: [],
      selectIndex: 0,
      createIndex: 0,
      createText: 'CREATE A FOOD'
    }
  },
  created(){
    this.initPage();
    this.changeTab(0);
  },
  methods: {
    initPage(){

    },
    changeTab(index){
      this.tab.map((item,index)=>{
        item.active = false;
      })
      this.tab[index].active = true;
      this.createIndex = index;
      switch(index){
        case 0:
          this.list = this.food;
          this.createText = 'CREATE A FOOD';
          break;
        case 1:
          this.list = this.recipes;
          this.createText = 'CREATE A RECIPE';
          break;
        case 2: 
          this.list = this.meals;
          this.createText = 'CREATE A MEAL';
          break;
      }
    },
    getItem(item,index){
      var status = item.select;
      if(this.tab[0].active){
        if(status){
          this.food[index].index = '- -';
          this.food[index].style = '';
          this.selectIndex --;
        }else{
          this.food[index].index = this.AJ[this.selectIndex];
          this.food[index].style = 'background-color:'+this.color[index];
          this.selectIndex ++;
        }
        this.food[index].select = !status;
      }
      // console.log(item,index)
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
  .list{
    overflow: scroll;
    height: calc(100% - 1rem);
    padding: 0.3rem;
  }
  .list-item{
    padding: 0.3rem 0.3rem;
    margin-bottom: 0.3rem;
    border-radius: 0.1rem;
    background: #fff;
  }
  .list-item-head{
    width: 0.8rem;
  }
  .list-item-index{
    width: 0.48rem;
    height: 0.48rem;
    line-height: 0.48rem;
    border-radius: 50%;
    background: #e9e9e9;
    color: #fff;
  }
  .list-item-status{
    margin: 0.16rem 0 0 0.16rem;
  }
  .list-item-status img{
    display: block;
    width: 0.16rem;
    height: 0.16rem;
  }
  .list-item-cont{
    flex: 1;
    text-align: left;
  }
  .list-item-title{
    color: #282c37;
    font-size: 0.36rem;
    line-height: 0.48rem;
  }
  .list-detail-item{
    display: inline;
    margin-right: 0.5rem;
  }
  .list-detail-item span{
    font-size: 0.28rem;
  }
  .icon-cal{
    width: 0.2rem;
    height: 0.29rem;;
  }
  .icon-val{
    width: 0.28rem;
    height: 0.23rem;
  }
  .list-empty{
    line-height: 1rem;
  }
  .create-btn{
    position: fixed;
    bottom: 0.8rem;
    left: 50%;
    transform: translate(-50%, 0);
    width: calc(100% - 1rem);
    height: 1rem;
    line-height: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  }
</style>
