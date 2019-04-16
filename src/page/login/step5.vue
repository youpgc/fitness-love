<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata" @headfun='skip()'></head-bar>
    <div class="heados">
      <div class="step-cont">
        <div class="step-title">Step 5/5</div>
        <div class="step-label">About your body.</div>
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
  name: 'step5',
  data () {
    return {
      headdata: {
        text: '',
        src: require('@/assets/images/icon-30.png'),
        span: 'SKIP'
      },
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
    nextStep(){
      this.$router.push({
        path: '/step6',
        name: 'step6'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.step-cont{
  text-align: left;
  padding: 0 0.5rem;
}
.step-title{
  font-size: 0.6rem;
  font-weight: bold;
  line-height: 1.2rem;
}
.step-label{
  font-size: 0.3rem;
}
.step-next{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.2rem;
  line-height: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
}
</style>
