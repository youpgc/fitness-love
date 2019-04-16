<template>
  <div class="oh">
    <div class="navos">
      <div>{{ msg }}</div>
    </div>
    <nav-bar grade="0"></nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/common/nav';
import DB from '@/assets/js/DB';
import axios from 'axios';
export default {
  components: {
    navBar
  },
  name: 'diaryIndex',
  data () {
    return {
      msg: 'diaryIndex',
      show: false
    }
  },
  created(){
    this.show = true;
    this.initDB();
  },
  mounted(){
    this.initPage();
  },
  methods: {
    initDB(){
      var dbkey = [
        {key: 'base', name: 'base', unique: true}
      ]
      DB.init('customer','data',dbkey);
    },
    initPage(){
      var _this = this;
      setTimeout(function(){
        console.log(DB.db)
        _this.$router.push({
          path: '/register',
          name: 'register'
        });
      },100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
