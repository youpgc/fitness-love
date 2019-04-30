<template>
  <div class="pt88">
    <head-bar v-bind:head="headData"></head-bar>
    <div class="heados">
        <div>{{msg}}</div>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/common/head';
export default {
  components: {
    headBar
  },
  name: 'forgot',
  data () {
    return {
      headData: {
        text: 'fotgot',
        src: require('@/assets/images/icon-30.png')
      },
      msg: 'forgot'
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

<style scoped>

</style>
