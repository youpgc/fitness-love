<template>
  <div class="pt88">
    <head-bar v-bind:head="headData"></head-bar>
    <div class="bf4 heados">
      <calendar v-bind:list="calenderData" class="shadow"></calendar>
    </div>
  </div>
</template>
<script>
import headBar from '@/components/common/head';
import calendar from '@/components/common/calendar';
export default {
  name: "plan",
  components: {
    headBar,
    calendar
  },
  data() {
    return {
      headData: {
        text: '',
        src: require('@/assets/images/icon-30.png')
      },
      calenderData: [],
      msg: "plan"
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
