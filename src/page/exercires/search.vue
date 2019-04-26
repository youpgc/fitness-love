<template>
  <div class="pt88 pb110 bf4">
    <head-bar v-bind:head="headData"></head-bar>
    <div class="heados">
      <div class="ele-search shadow">
        <div class="ele-search-input">
          <input type="search" ref="input" v-model="search" placeholder="Search exercise"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headBar from '@/components/common/head';
export default {
  components: {
    headBar
  },
  name: 'exeSearch',
  data () {
    return {
      headData: {
        text: 'Exercises Guide',
        src: require('@/assets/images/icon-30.png')
      },
      icon: {
        cal: require('@/assets/images/icon-09.png'),
        time: require('@/assets/images/icon-07.png')
      },
      search: '',
    }
  },
  mounted(){
      this.initPage();
  },
  methods: {
    initPage(){
        // this.$refs.input.onfocus();
    }
  }
}
</script>

<style scoped>
  .ele-search{
    height: 1.5rem;
    padding: 0.3rem;
    background: #fff;
  }
  .ele-search-input{
    width: 100%;
    height: 100%;
    padding: 0 0.3rem 0 0.8rem;
    border-radius: 0.1rem;
    border: 1px solid #ddd;
    background-image: url('../../assets/images/icon-24.png');
    background-position: 0.3rem center;
    background-repeat: no-repeat;
    background-size: 0.44rem 0.44rem;
  }
  .ele-search-input input{
    width: 100%;
    height: 100%;
    padding: 0.2rem 0.1rem;
    font-size: 0.36rem;
  }
</style>
