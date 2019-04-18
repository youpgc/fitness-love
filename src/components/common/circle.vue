<template>
  <div>
    <div>{{msg}}</div>
  </div>
</template>
<script>
export default {
  props: ["context"],
  name: "circle",
  data() {
    return {
      msg: "canvas"
    };
  },
  methods: {
    init(){
        
    }
  }
};
</script>

<style scoped>

</style>
