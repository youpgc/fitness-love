<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    var data = window.localStorage.getItem('infoData');
    data = JSON.parse(data);
    if(!data){
      this.$router.push({
        name: 'startIndex',
        path: '/startIndex'
      })
    }else if(data && !data.status){
      this.$router.push({
        name: 'login',
        path: '/login'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.4rem;
  width: 100%;
  height: 100%;
}
</style>
