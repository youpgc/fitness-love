<template>
  <div>
    <div>{{ msg }}</div>
    <nav-bar grade="1"></nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/common/nav';
export default {
  components: {
    navBar
  },
  name: 'exeIndex',
  data () {
    return {
      msg: 'exeIndex'
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

</style>
