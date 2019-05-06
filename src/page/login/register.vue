<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata"></head-bar>
    <div class="heados">
      <div class="register-cont">
        <div class="register-logo">
          <img :src="logo">
        </div>
        <div class="register-btn register-phone" @click="changeType(false)" v-if="type">Sign up with phone number</div>
        <div class="register-btn register-phone" @click="changeType(true)" v-else>Sign up with Email</div>
        <div class="register-cut">————<span>or</span>————</div> 
        <div class="register-form">
          <div class="form-item" v-if="type">
            <div class="form-label">Email</div>
            <div class="form-input">
              <input type="text" v-model="formData.email" placeholder="Please enter your email address"/>
            </div>
          </div>
          <div class="form-item" v-else>
            <div class="form-label">Phone number</div>
            <div class="form-input">
              <input type="text" v-model="formData.phone" placeholder="Please enter your phone number"/>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">Password</div>
            <div class="form-input">
              <input type="password" v-model="formData.pwd" placeholder="Please enter your password"/>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">Confirm Password</div>
            <div class="form-input">
              <input type="password" v-model="formData.cfPwd" placeholder="Please confirm your password"/>
            </div>
          </div>
          <div class="register-btn gradient-back" @click="toResit()">SIGN UP</div>
        </div>
        <div class="toLogin">Already have an account ? <router-link :to="{name:'login', params:{status: true}}"> Log In</router-link></div>
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
  name: 'register',
  data () {
    return {
      msg: 'register',
      headdata: {
        text: 'Sign Up',
        // src: require('@/assets/images/icon-30.png')
      },
      logo: require('@/assets/images/logo.png'),
      type: true,
      formData: {
        email: '',
        phone: '',
        pwd: '',
        cfPwd: '',
      }
    }
  },
  created(){
    // var param = this.$route.params;
    // if(param.status){
    //     this.headdata.src = '';
    // }
    this.initPage();
  },
  methods: {
    initPage(){
      if(!this.DB.db){
        this.DB.init();
      }
    },
    changeType(status){
      this.type = status;
      for(let key in this.formData){
        this.formData[key] = '';
      }
    },
    toResit(){
      var msg = '';
      var regPhone = /^1(3|4|5|7|8)\d{9}$/;
      var regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
      if(this.type && this.formData.email.length==0){
        msg = 'Please enter your email address';
      }else if(this.type && this.formData.email.length>0 && !regEmail.test(this.formData.email)){
        msg = 'Please enter the correct email address';
      }else if(!this.type && this.formData.phone.length==0){
        msg = 'Please enter your phone number';
      }else if(!this.type && this.formData.phone.length>0 && !regPhone.test(this.formData.phone)){
        msg = 'Please enter the correct phone number';
      }else if(this.formData.pwd.length==0){
        msg = 'Please enter your password';
      }else if(this.formData.cfPwd.length==0){
        msg = 'Please confirm your password';
      }else if(this.formData.cfPwd !== this.formData.pwd){
        msg = 'The passwords do not match';
      }
      if(msg.length>0){
        this.$toast(msg)
      }else{
        this.saveLog();
      }
    },
    saveLog(){
      var _this = this;
      var data = {
        title: 'register', 
        email: _this.formData.email, 
        password: _this.formData.pwd, 
        phone: _this.formData.phone
      }
      _this.DB.add(data, function(res){
        data['id'] = res;
        _this.$toast('registered successfully');
        setTimeout(()=>{
          _this.$router.push({
            path: '/step1',
            name: 'step1',
            params: data
          });
        },1500)
      },function(res){
        _this.$toast('fail to sign in')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register-cont{
  padding: 0 0.5rem;
}
.register-logo{
  width: 2.1rem;
  height: 2.1rem;
  margin: 0.5rem auto;
}
.register-logo img{
  box-shadow: 0 0 0.5rem 0 rgba(221,221,221,0.5);
  border-radius: 0.5rem;
}
.register-btn{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.2rem 0 #ddd;
}
.register-phone{
  background: #3b5998;
  color: #fff;
}
.register-cut{
  padding: 0.3rem 0;
  color: #e9e9e9;
}
.register-cut span{
  color: #282c37;
  padding: 0 0.3rem;
}
.register-form{
  overflow: hidden;
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
.toLogin{
  margin-top: 0.6rem;
  font-size: 0.3rem;
}
.toLogin a{
  color: #ff5e3a;
}
</style>
