<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata" @headfun='skip()'></head-bar>
    <div class="heados">
      <div class="step-cont">
        <div class="step-title">Step 1/5</div>
        <div class="step-label">Hi! What your name ?</div>
        <div class="step-camera" :style="'background-image:url('+formData.via+')'">
          <input type="file" @change='addVia($event)' capture="camera" multiple="false" accept="image/*"/>
        </div>
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
        span: 'SKIP'
      },
      default: require('@/assets/images/icon-58.png'),
      formData: {
        via: require('@/assets/images/icon-58.png'),
        name: '',
        age: '',
        sex: 'MALE',
      },
      sex: false,
    }
  },
  created(){
    var data = this.$route.params;
    for(let key in data){
      this.formData[key] = data[key];
    }
    this.formData['step'] = 1;
    this.initPage();
  },
  methods: {
    initPage(){
      if(!this.DB.db){
        this.DB.init();
      }
    },
    skip(){
      console.log('skip');
    },
    addVia(el){
      var _this = this;
      var file = el.target.files[0];
      if(file){
          var type = file.type.split('/')[0];
          if(type && type === 'image'){
              _this.formData.via = getFileURL(file)
          }
      }else{
        _this.formData.via = _this.default;
      }
      function getFileURL(file) {
        var getUrl = null;
        if(window.createObjectURL != undefined) { // basic
            getUrl = window.createObjectURL(file);
        } else if(window.URL != undefined) { // mozilla(firefox)
            getUrl = window.URL.createObjectURL(file);
        } else if(window.webkitURL != undefined) { // webkit or chrome
            getUrl = window.webkitURL.createObjectURL(file);
        }
        return getUrl;
      }
    },
    // dataURItoBlob (dataURI) {
    //     // base64 解码
    //     let byteString = window.atob(dataURI.split(',')[1]);
    //     let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    //     let T = mimeString.split('/')[1];
    //     let ab = new ArrayBuffer(byteString.length);
    //     let ia = new Uint8Array(ab);
    //     for (let i = 0; i < byteString.length; i++) {
    //         ia[i] = byteString.charCodeAt(i);
    //     }
    //     return new Blob([ab], {type: mimeString});
    // },
    changeSex(){
      this.sex = !this.sex;
      if(this.sex){
        this.formData.sex = 'FEMALE';
      }else{
        this.formData.sex = 'MALE';
      }
    },
    nextStep(){
      var _this = this;
      var msg = '';
      if(_this.formData.name.length==0){
        msg = 'Please enter your name'
      }else if(_this.formData.age.length==0){
        msg = 'Please enter your age'
      }
      if(msg.length>0){
        _this.$toast(msg);
      }else{
          _this.DB.put(_this.formData, function(res){
            _this.$router.push({
              path: '/step2',
              name: 'step2',
              params: _this.formData
            })
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  padding-top: 1rem;
}
.form-item{
  text-align: left;
  border: 1px solid #e9e9e9;
  border-radius: 0.1rem;
  margin-bottom: 0.5rem; 
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
.step-camera input{
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>
