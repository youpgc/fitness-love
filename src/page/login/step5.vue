<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata" @headfun='skip()'></head-bar>
    <div class="heados">
      <div class="step-cont">
        <div class="step-title">Step 5/5</div>
        <div class="step-label">About your body.</div>
        <div class="step-form">
          <div class="form-item">
            <div class="form-input">
              <input type="text" v-model="formData.tall" placeholder="How tall are you ?">
            </div>
          </div>
          <div class="form-item">
            <div class="form-input">
              <input type="text" v-model="formData.weight" placeholder="How much do you currently weight ?">
            </div>
          </div>
          <div class="form-parenthesis">We use this infomation to culculate an accurate calorie goal for you.</div>
          <div class="step-type" @click="changeSize()">
            <div class="step-type-item">CENTIMETERS</div>
            <div class="step-type-item">FEET/INCHS</div>
            <div class="step-btn gradient-back" :class="{'step-btn-act':size}" @click.stop="">{{formData.size}}</div>
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
  name: 'step5',
  data () {
    return {
      headdata: {
        text: '',
        src: require('@/assets/images/icon-30.png'),
        span: 'SKIP'
      },
      formData: {
        tall: '',
        weight: '',
        size: 'CENTIMETERS',
      },
      size: false,
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
    changeSize(){
      this.size = !this.size;
      if(this.size){
        this.formData.size = 'FEET/INCHS';
      }else{
        this.formData.size = 'CENTIMETERS';
      }
    },
    nextStep(){
      var _this = this;
      var msg = '';
      if(this.formData.tall.length==0){
        msg = 'Please enter your tall';
      }else if(this.formData.weight==0){
        msg = 'Please enter your currently weight';
      }
      if(msg.length>0){
        _this.$toast(msg);
      }else{
        var data = _this.$route.params;
        data['tall'] = _this.formData.tall;
        data['currently_weight'] = _this.formData.weight;
        data['tall_unit'] = _this.formData.size;
        data['step'] = 5;
        _this.DB.put(data, function(res){
          _this.$router.push({
            path: '/step6',
            name: 'step6',
            params: data
          })
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.step-form{
  margin-top: 1rem;
}
.form-item{
  text-align: left;
  border: 1px solid #e9e9e9;
  border-radius: 0.1rem;
  margin-bottom: 0.3rem; 
  padding: 0.2rem 0.3rem;
  position: relative;
}
.form-input input{
  width:100%;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #282c37;
  font-size: 0.36rem;
}
.form-parenthesis{
  font-size: 0.28rem;
  margin-bottom: 0.8rem;
}
.step-type{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.3rem;
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
  font-size: 0.3rem;
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
</style>
