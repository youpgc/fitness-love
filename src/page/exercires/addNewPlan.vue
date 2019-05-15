<template>
  <div class="pt88 bf4">
    <head-bar v-bind:head="headData" class="shadow"></head-bar>
    <div class="heados">
      <div class="newplan shadow">
          <div class="newplan-title bbse9">BASIC INFOMATION</div>
          <div class="newplan-form">
              <div class="newplan-item brse9">
                  <div class="newplan-label">Exercise Name</div>
                  <div class="form-input">
                      <input type="text" v-model="formData.name" placeholder="Please enter exercise name"/>
                  </div>
              </div>
              <div class="newplan-item brse9">
                  <div class="newplan-label">Calories Burn (cal)</div>
                  <div class="form-input">
                      <input type="text" v-model="formData.cal" placeholder="Please enter calories burn"/>
                  </div>
              </div>
              <div class="newplan-item brse9">
                  <div class="form-input">
                      <input type="text" v-model="formData.duration" placeholder="Duration"/>
                  </div>
              </div>
          </div>
      </div>
      <div class="new-btn gradient-back" @click="addnew">ADD TO PLAN</div>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/common/head';
export default {
  components: {
    headBar
  },
  name: 'addNewPlan',
  data () {
    return {
      headData: {
        text: "User's Exercise",
        src: require('@/assets/images/icon-30.png')
      },
      formData: {
          name: '',
          cal: '',
          duration: ''
      }
    }
  },
  mounted(){
      this.initPage();
  },
  methods: {
    initPage(){
      
    },
    addnew(){
        console.log(this.formData)
    }
  }
}
</script>

<style scoped>
   .newplan{
       margin: 0.3rem;
       text-align: left;
       background: #fff;
       border-radius: 0.1rem;
   }
   .newplan-title{
       height: 0.84rem;
       line-height: 0.84rem;
       padding-left: 0.32rem;
       font-size: 0.3rem;
   }
   .newplan-form{
       padding: 0.3rem;
   }
   .newplan-item{
       padding: 0.2rem 0.3rem;
       margin-bottom: 0.3rem;
       border-radius: 0.1rem;
   }
   .newplan-item:last-child{
       margin-bottom: 0;
   }
   .newplan-label{
       font-size: 0.26rem;
       color: #5856d6;
       margin-bottom: 0.1rem;
   }
   .form-input{
       width: 100%;
       height: 0.6rem;
   }
   .form-input input{
       display: block;
       width: 100%;
       height: 100%;
       line-height: 0.6rem;
       font-size: 0.36rem;
   }
   .new-btn{
       width: calc(100% - 0.6rem);
       height: 1rem;
       line-height: 1rem;
       font-size: 0.36rem;
       border-radius: 0.5rem;
       margin: 0.8rem auto 0;
   }
</style>
