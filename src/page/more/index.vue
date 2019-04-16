<template>
  <div>
    <div>{{ msg }}</div>
    <nav-bar grade="4"></nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/common/nav';
export default {
  components: {
    navBar
  },
  name: 'moreIndex',
  data () {
    return {
      msg: 'moreIndex'
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
