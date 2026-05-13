<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.checkAuth();
  },
  methods: {
    /**
     * 检查用户认证状态
     */
    checkAuth() {
      const storedData = localStorage.getItem('infoData');
      
      if (!storedData) {
        this.redirectTo('startIndex');
        return;
      }
      
      try {
        const data = JSON.parse(storedData);
        if (!data.status) {
          this.redirectTo('login');
        }
      } catch (e) {
        console.error('解析用户数据失败:', e);
        this.redirectTo('startIndex');
      }
    },
    
    /**
     * 路由跳转
     * @param {string} name - 路由名称
     */
    redirectTo(name) {
      this.$router.push({ name });
    }
  }
};
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
