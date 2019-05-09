<template>
 <div class="loading" id="loading">
  <div class="loading-tip">
    <img :src="imgUrl" :style="'width:'+size/100+'rem;height:'+size/100+'rem'">
    <span v-if="type">{{text}}</span>
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
  },
  props: {
    text: {
      type: String,
      default: 'loading'
    },
    size: {
      type: Number,
      default: 80
    },
    type: false
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
  z-index: 98;
  width: 100%;
  height: 100%;
  background: #fff;
}
.loading-tip {
  padding: 0.2rem 0.3rem;
  border-radius: 0.1rem;
  line-height: 0.5rem;
}
.loading img {
  animation: rotate 1s linear infinite;
}
.loading-tip span{
  font-size: 0.36rem;
  color: #999;
  margin-left: -0.16rem;
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