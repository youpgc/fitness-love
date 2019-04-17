<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata"></head-bar>
    <div class="heados">
      <div class="login-cont">
        <div class="login-logo">
          <img :src="logo">
        </div>
        <div class="login-form">
          <div class="form-item">
            <div class="form-label">Email</div>
            <div class="form-input">
              <input type="text" v-model="formData.email" placeholder="Please enter your email address"/>
            </div>
          </div>
          <div class="form-item">
            <div class="form-label">Password</div>
            <div class="form-input">
              <input type="password" v-model="formData.pwd" placeholder="Please enter your password"/>
            </div>
          </div>
          <div class="forgot"><router-link to="/forgot">Forgot Password</router-link></div>
          <div class="login-btn gradient-back">LOG IN</div>
          <div class="login-cut">————<span>or</span>————</div>
          <div class="login-btn bblue">Log in with phone number</div>
          <div class="toRegister">Don't have an account ? <router-link to="/register"> Sign Up</router-link></div>
        </div>
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
  name: 'login',
  data () {
    return {
      headdata: {
        text: 'Log In',
        src: require('@/assets/images/icon-30.png')
      },
      logo: require('@/assets/images/logo.png'),
      formData: {
        email: '',
        pwd: ''
      }
    }
  },
  created(){
    this.initPage();
  },
  methods: {
    initPage(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-cont{
  padding: 0 0.5rem;
}
.login-logo{
  width: 2.1rem;
  height: 2.1rem;
  margin: 0.5rem auto;
}
.login-logo img{
  box-shadow: 0 0 0.5rem 0 rgba(221,221,221,0.5);
  border-radius: 0.5rem;
}
.form-item{
  text-align: left;
  border: 1px solid #e9e9e9;
  border-radius: 0.1rem;
  margin-top: 0.3rem; 
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
.forgot{
  text-align: left;
  padding: 0.16rem 0 0.3rem;
}
.forgot a{
  font-size: 0.28rem;
  color: #ff5e3a;
}
.login-btn{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.36rem;
  color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.24rem 0.3rem 0 #ddd;
}
.login-cut{
  padding: 0.4rem 0;
  color: #e9e9e9;
}
.login-cut span{
  color: #282c37;
  padding: 0 0.3rem;
}
.toRegister{
  margin-top: 1rem;
  font-size: 0.3rem;
}
.toRegister a{
  color: #ff5e3a;
}
</style>
