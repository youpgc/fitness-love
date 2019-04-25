<template>
  <div class="short">
    <div class="short-cont">
        <div class="short-head bbse9">
            <div class="short-title">{{title}}</div>
            <div @click="closeX" class="short-close"><img :src="icon.close"/></div>
        </div>
        <div class="short-water" v-if="cut == 'water'">
            <div class="water-imgs bbse9">
                <div class="water-img" v-for="(item,index) in water.list" :key="index"><img :src="icon.cup"/></div>
                <div class="water-img"><img :src="icon.cupAdd"/></div>
                <div class="water-img" v-for="item in water.empty" :key="item"><img :src="icon.cupEp"/></div>
            </div>
            <div class="water-sum dflex-between">
                <div class="water-sum-real"><span>{{water.sum}}</span><img :src='icon.warn'/></div>
                <div class="water-sum-recom">recommended {{water.recom}}</div>
            </div>
        </div>
        <div class="short-food" v-if="cut == 'food'">
            <div class="food-list">
                <div class="food-item" v-for="(item,index) in food" :key="index">
                    <img :src="item.icon"/>
                    <span>{{item.title}}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'short',
  props: ['cut'],
  data() {
    return {
        title: '',
        icon: {
            close: require('@/assets/images/icon-41.png'),
            cup: require('@/assets/images/pic-02.png'),
            cupAdd: require('@/assets/images/pic-03.png'),
            cupEp: require('@/assets/images/pic-04.png'),
            warn: require('@/assets/images/icon-12.png')
        },
        water: {
            sum: '0.4 liters',
            recom: '2 - 2.5 liters',
            list: [{date: '2019-4-22 14:32',status: true}],
            empty: [1,2,3,4]
        },
        food: [
            {title: 'Breakfast', icon: require('@/assets/images/icon-15.png')},
            {title: 'Lunch', icon: require('@/assets/images/icon-16.png')},
            {title: 'Dinner', icon: require('@/assets/images/icon-17.png')},
            {title: 'Snack', icon: require('@/assets/images/icon-18.png')},
        ]
    };
  },
  created(){
      if(this.cut == 'water'){
          this.title = 'WATER';
      }else if(this.cut == 'food'){
          this.title = 'SELECT A MEAL';
      }
  },
  methods: {
    closeX(){
        this.$emit('closecut');
    }
  },
};
</script>

<style scoped>
.short{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    left: 0;
    top: 0;
    animation: shade 0.3s;
}
.short-cont{
    width: 100%;
    height: auto;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
}
.short-head{
    height: 0.86rem;
    line-height: 0.86rem;
    padding-left: 0.3rem;
    overflow: hidden;
}
.short-title{
    float: left;
    font-size: 0.3rem;
}
.short-close{
    float: right;
    width: 0.86rem;
    padding: 0 0.3rem;
}
.short-water{
    overflow: hidden;
}
.water-imgs{
    width: 100%;
    height: 1.8rem;
    padding: 0 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.water-img{
    width: 100%;
}
.water-img img{
    width: 0.74rem;
    height: 1.04rem;
}
.water-sum{
    padding: 0 0.3rem;
    height: 1.3rem;
    line-height: 1.3rem;
}
.water-sum-real{
    font-size: 0.5rem;
}
.water-sum-real img{
     width: 0.4rem;
     height: 0.4rem;
     margin-left: 0.16rem;
 }
.water-sum-recom{
    font-size: 0.28rem;
}
.short-food{
    height: 2.5rem;
    padding: 0 0.3rem;
    overflow: hidden;
}
.food-list{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.food-item{
    width: 100%;
    font-size: 0.3rem;
    line-height: 0.4rem;
}
.food-item img{
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    border: 1px solid #e9e9e9;
}
</style>
