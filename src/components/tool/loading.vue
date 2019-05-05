<template>
 <div class="loading" v-if="loading">
  <div class="loading-tip">
    <img :src="imgUrl">
  </div>
 </div>
</template>
<script>
export default {
  name: 'loading',
  data() {
    return {
      imgUrl: require('@/assets/images/loading.png'),
    };
  }
};
</script>
<style scoped>
.loading {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  color: #fff;
}
.loading-tip {
  padding: 0.2rem 0.3rem;
  background-color: rgba(41, 41, 41, 0.8);
  border-radius: 0.1rem;
}
.loading img {
  width: 0.8rem;
  height: 0.8rem;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>