<template>
  <div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: 'register'
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
