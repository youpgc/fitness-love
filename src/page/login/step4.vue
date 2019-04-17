<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata" @headfun='skip()'></head-bar>
    <div class="heados">
      <div class="step-cont">
        <div class="step-title">Step 4/5</div>
        <div class="step-label">How active are you ?</div>
        <div class="step-form">
          <div class="step-item" 
            @click="selectThis(index)" 
            :class="item.checked?'gradient-back active':''" 
            v-for="(item,index) in active" 
            :key="index">
            {{item.title}}
          </div>
        </div>
      </div>
      <div class="step-next gradient-back" @click="nextStep()">NEXT</div>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/common/head';

export default {
  components: {
    headBar
  },
  name: 'step4',
  data () {
    return {
      headdata: {
        text: '',
        src: require('@/assets/images/icon-30.png'),
        span: 'SKIP'
      },
      frequency: '',
      active: [
        {title: 'NOT ACTIVE', checked: false},
        {title: 'LIGHT ACTIVE', checked: false},
        {title: 'ACTIVE', checked: false},
        {title: 'VERY ACTIVE', checked: false}
      ]
    }
  },
  created(){
    this.initPage();
  },
  methods: {
    initPage(){

    },
    skip(){
      console.log('skip');
    },
    selectThis(index){
      this.active.forEach(item=>{
        item.checked = false;
      })
      this.active[index].checked = true;
      this.frequency = this.active[index].title;
    },
    nextStep(){
      this.$router.push({
        path: '/step5',
        name: 'step5'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.step-form{
  padding: 0.5rem 0.5rem 0;
}
.step-item{
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  color: #6d819c;
  border: 0.04rem solid #e9e9e9;
  border-radius: 1.5rem;
  margin-bottom: 0.5rem;
}
.active{
  color: #fff;
  border-color: #fff;
}
</style>
