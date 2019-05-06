<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata"></head-bar>
    <div class="heados">
      <div class="step-cont">
        <div class="step-title">Completed!!!</div>
        <div class="step-label">Your new plan.</div>
        <div class="step-matter">
          <div class="step-mat">
            <div class="mat-label">Your Plan is to reach your goal in</div>
            <div class="mat-span">18 weeks</div>
            <div class="mat-label">with a daily calorie goal of</div>
            <div class="mat-span">2450 Cal</div>
            <div class="mat-gain">Gain <span>0.4kg</span>/weeks</div>
          </div>
        </div>
      </div>
      <div class="step-plat">
        <div class="plat-scale1 plat-scale">{{scales.scale1}}</div>
        <div class="plat-scale2 plat-scale">{{scales.scale2}}</div>
        <div class="plat-scale3 plat-scale">{{scales.scale3}}</div>
        <div class="plat-scale4 plat-scale">{{scales.scale4}}</div>
        <div class="plat-scale5 plat-scale">{{scales.scale5}}</div>
      </div>
      <div class="step-next gradient-back" @click="nextStep()">Let's start your plan !</div>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/common/head';

export default {
  components: {
    headBar
  },
  name: 'step5',
  data () {
    return {
      headdata: {
        text: '',
        src: require('@/assets/images/icon-30.png'),
      },
      info: {},
      scales: {
        scale1: '0.0',
        scale2: '0.2',
        scale3: '0.4',
        scale4: '0.6',
        scale5: '0.8'
      }
    }
  },
  created(){
    var data = this.$route.params;
    this.info = data;
    this.initPage();
  },
  methods: {
    initPage(){
      console.log(this.info)
    },
    nextStep(){
      this.$router.push({
        path: '/lgoin',
        name: 'login'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .step-mat{
    width: 100%;
    height: auto;
    text-align: center;
    border: 0.04rem solid #ff5e3a;
    margin-top: 1rem;
    padding: 0.2rem 0 0.8rem;
    border-radius: 0.4rem;
    position: relative;
  }
  .mat-label{
    font-size: 0.3rem;
    line-height: 1rem;
  }
  .mat-span{
    font-size: 0.6rem;
    font-weight: bold;
    line-height: 1;
  }
  .mat-gain{
    width: 5rem;
    line-height: 0.8rem;
    background: #fff;
    border-radius: 0.4rem;
    border: 0.04rem solid #ff5e3a;
    position: absolute;
    left: 50%;
    bottom: -0.4rem;
    transform: translate(-50%,0);
  }
  .mat-gain span{
    font-size: 0.48rem;
    font-weight: bold;
  }
  .mat-gain::before{
    content: '';
    position: absolute;
    width: 0.05rem;
    height: 0.9rem;
    bottom: -0.91rem;
    left: 50%;
    transform: translate(-50%,0);
    background: #ff5e3a;
  }
  .mat-gain::after{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 0.12rem solid transparent;
    border-right: 0.12rem solid transparent;
    border-top: 0.16rem solid #ff5e3a;
    left: 50%;
    bottom: -1.06rem;
    transform: translate(-50%,0);
  }
  .step-plat{
    width: 7.5rem;
    height: 3.69rem;
    margin: 0 auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('../../assets/images/pic-01.png');
    margin-top: 1.4rem;
    position: relative;
  }
  .plat-scale{
    position: absolute;
    display: inline;
    font-size: 0.28rem;
    font-weight: bold;
    color: #6d819c;
  }
  .plat-scale1{
    left: 0.65rem;
    top: 1.96rem;
  }
  .plat-scale2{
    left: 2rem;
    top: 1.16rem;
  }
  .plat-scale3{
    left: 50%;
    top: 0.76rem;
    transform: translate(-50%,0);
    font-size: 0.36rem;
    color: #282c37;
  }
  .plat-scale4{
    right: 2rem;
    top: 1.16rem;
  }
  .plat-scale5{
    right: 0.65rem;
    top: 1.96rem;
  }
</style>
