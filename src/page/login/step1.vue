<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata" @headfun='skip()'></head-bar>
    <div class="heados">
      <div class="step-cont">
        <div class="step-title">Step 1/5</div>
        <div class="step-label">Hi! What your name ?</div>
        <div class="step-camera" :style="'background-image:url('+camera+')'"></div>
        <div class="step-form">
          <div class="form-item">
            <div class="form-label">Your Name</div>
            <div class="form-input">
              <input type="text" v-model="formData.name" placeholder="please enter your name">
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">Your Age</div>
            <div class="form-input">
              <input type="text" v-model="formData.age" placeholder="please enter your Age">
            </div>
          </div>
          <div class="step-type" @click="changeSex()">
            <div class="step-type-item">MALE</div>
            <div class="step-type-item">FEMALE</div>
            <div class="step-btn gradient-back" :class="{'step-btn-act':sex}" @click.stop="">{{formData.sex}}</div>
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
  name: 'step1',
  data () {
    return {
      headdata: {
        text: '',
        src: require('@/assets/images/icon-30.png'),
        span: 'SKIP'
      },
      camera: require('@/assets/images/icon-58.png'),
      formData: {
        name: '',
        age: '',
        sex: 'MALE',
      },
      sex: false,
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
    changeSex(){
      this.sex = !this.sex;
      if(this.sex){
        this.formData.sex = 'FEMALE';
      }else{
        this.formData.sex = 'MALE';
      }
    },
    nextStep(){
      this.$router.push({
        path: '/step2',
        name: 'step2'
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
.step-camera{
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 0.8rem auto 0;
}
.step-form{
  margin-top: 1rem;
}
.form-item{
  text-align: left;
  border: 1px solid #e9e9e9;
  border-radius: 0.1rem;
  margin-bottom: 0.32rem; 
  padding: 0.2rem 0.3rem;
  position: relative;
}
.form-item:last-child{
  margin-bottom: 0;
}
.form-label{
  font-size: 0.26rem;
  font-weight: bold;
  color: #5856d6;
  margin-bottom: 0.1rem;
}
.form-input input{
  width:100%;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #282c37;
  font-size: 0.36rem;
}
.step-type{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  border: 0.04rem solid #e9e9e9;
  box-sizing: border-box;
  background: #f8faff;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
}
.step-type-item{
  width: 50%;
  color: #6d819c;
}
.step-btn{
  position: absolute;
  width: 50%;
  height: 1rem;
  line-height: 1.08rem;
  border-radius: 0.5rem;
  left: -0.04rem;
  top: -0.04rem;
  transition: 0.3s;
}
.step-btn-act{
  left: calc(50% + 0.04rem);
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
