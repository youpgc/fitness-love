<template>
  <div class="pt88">
    <head-bar v-bind:head="headdata"></head-bar>
    <div class="heados">
      <div class="login-cont">
        <div class="login-logo">
          <img :src="logo">
        </div>
        <div class="login-form">
          <div class="form-item" v-if="type">
            <div class="form-label">Email</div>
            <div class="form-input">
              <input type="text" v-model="formData.email" placeholder="Please enter your email address"/>
            </div>
          </div>
          <div class="form-item" v-else>
            <div class="form-label">Phone</div>
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
          <div class="forgot"><router-link to="/forgot">Forgot Password</router-link></div>
          <div class="login-btn gradient-back" @click="login()">LOG IN</div>
          <div class="login-cut">————<span>or</span>————</div>
          <div class="login-btn bblue" v-if="type" @click="changeType(false)">Log in with phone number</div>
          <div class="login-btn bblue" v-else @click="changeType(true)">Log in with Email</div>
          <div class="toRegister">Don't have an account ? <router-link :to="{ name:'register', params:{'status': true} }"> Sign Up</router-link></div>
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
      type: true,
      formData: {
        email: '',
        phone: '',
        pwd: ''
      }
    }
  },
  created(){
    var param = this.$route.params;
    if(param.status){
        this.headdata.src = '';
    }
  },
  mounted(){
    this.initPage();
  },
  methods: {
    initPage(){
      if(!this.DB.db){
        this.DB.init();
      }
    },
    login(){
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
      }
      if(msg.length>0){
        this.$toast(msg);
      }else{
        this.saveLog();
      }
    },
    saveLog(){
      var _this = this;
      var member = 'email', pwd = _this.formData.email;
      if(_this.formData.email.length == 0 && _this.formData.phone.length>0){
        member = 'phone', pwd = _this.formData.phone;
      }
      _this.DB.getItem(member, pwd, function(res){
        if(res.password && res.password == _this.formData.pwd){
          var data = res;
          data['title'] = 'login';
          data['status'] = true;
          _this.DB.add(data, function(res){
            _this.$toast('Login successfully');
            setTimeout(()=>{
              _this.$router.push({
                name: 'diaryIndex',
                path: '/'
              })
            },1500)
          },function(res){
            _this.$toast('login failure');
          })
        }else{
          _this.$toast('Wrong account or password');
        }
      })
      
    },
    changeType(status){
      this.type = status;
      for(let key in this.formData){
        this.formData[key] = '';
      }
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
