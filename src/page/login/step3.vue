<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata" @headfun='skip()'></head-bar>
    <div class="heados">
      <div class="step-cont">
        <div class="step-title">Step 3/5</div>
        <div class="step-label">What much would you like to gain ?</div>
        <div class="step-form">
          <div class="form-item">
            <div class="form-label">Your Goal ({{unit.title}})</div>
            <div class="form-input">
              <input type="text" v-model="formData.goal" placeholder="please enter your goal">
            </div>
          </div>
          <div class="step-type">
            <div class="step-type-item" @click="changeUnit(1)">KILOGRAMS</div>
            <div class="step-type-item" @click="changeUnit(2)">POUNDS</div>
            <div class="step-type-item" @click="changeUnit(3)">STONES</div>
            <div class="step-btn gradient-back" :class="{'step-btn-mid': unit.index == 2, 'step-btn-last': unit.index == 3}" @click.stop="">{{formData.unit}}</div>
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
  name: 'step3',
  data () {
    return {
      headdata: {
        text: '',
        src: require('@/assets/images/icon-30.png'),
        span: 'SKIP'
      },
      formData: {
          unit: 'KILOGRAMS',
          goal: ''
      },
      unit: {
          index: 0,
          title: 'kg'
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
    changeUnit(index){
        this.unit.index = index;
        if(index == 1){
            this.formData.unit = 'KILOGRAMS';
            this.unit.title= 'kg';
        }else if(index == 2){
            this.formData.unit = 'POUNDS';
            this.unit.title= 'lb';
        }else if(index == 3){
            this.formData.unit = 'STONES';
            this.unit.title= 'st';
        }
    },
    nextStep(){
      var _this = this;
      var msg = '';
      if(_this.formData.goal.length==0){
        msg = 'Please enter your goal'
      }
      if(msg.length>0){
        _this.$toast(msg);
      }else{
        var data = _this.$route.params;
        data['goal'] = _this.formData.goal;
        data['goal_unit'] = _this.unit.title;
        data['step'] = 3;
        _this.DB.put(data, function(res){
          _this.$router.push({
            path: '/step4',
            name: 'step4',
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
  margin-top: 2rem;
}
.form-item{
  text-align: left;
  border: 1px solid #e9e9e9;
  border-radius: 0.1rem;
  margin-bottom: 1rem; 
  padding: 0.2rem 0.3rem;
  position: relative;
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
  width: calc(100% * 2/3);
  color: #6d819c;
  font-size: 0.3rem;
}
.step-btn{
  position: absolute;
  width: calc(100% * 1/3);
  height: 1rem;
  line-height: 1.08rem;
  font-size: 0.3rem;
  border-radius: 0.5rem;
  left: -0.04rem;
  top: -0.04rem;
  transition: 0.3s;
}
.step-btn-mid{
  left: 50%;
  transform: translate(-50%,0);
}
.step-btn-last{
    left: calc(100% * 2/3 + 0.04rem);
}
</style>
