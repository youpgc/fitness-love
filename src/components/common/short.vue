<template>
  <div class="short">
    <div class="short-cont">
        <div class="short-item" @click="getLink(item.link)" v-for="(item,index) in menu" :key="index">
            <img :src="item.icon"/>
            <div class="short-title">{{item.title}}</div>
        </div>
        <div @click="closeMenu" class="short-close"><img :src="close"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'short',
  data() {
    return {
        menu: [
            {title: 'Water', icon: require('@/assets/images/home-10.png'), link: 'water'},
            {title: 'Food', icon: require('@/assets/images/home-11.png'), link: 'food'},
            {title: 'Exercises', icon: require('@/assets/images/home-12.png'), link: 'exe'},
            {title: 'Body Index', icon: require('@/assets/images/home-13.png'), link: 'body'},
        ],
        close: require('@/assets/images/home-14.png'),
    };
  },
  methods: {
    closeMenu(){
        this.$emit('menu');
    },
    getLink(type){
        this.$emit('link',type);
    }
  },
};
</script>

<style scoped>
.short{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    left: 0;
    top: 0;
    animation: shade 0.3s;
}
.short-cont{
    width: 100%;
    height: 100%;
    position: relative;
}
.short-item{
    position: absolute;
    width: 1.6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: item 0.3s;
}
.short-item:nth-child(1){
    bottom: 1rem;
    left: 0.6rem;
}
.short-item:nth-child(2){
    bottom: 2rem;
    left: 2.16rem;
}
.short-item:nth-child(3){
    bottom: 2rem;
    right: 2.16rem;
}
.short-item:nth-child(4){
    bottom: 1rem;
    right: 0.6rem;
}
.short-item img{
    width: 0.96rem;
    height: 0.96rem;
}
.short-title{
    color: #fff;
    font-size: 0.3rem;
    line-height: 2;
    animation: title 0.4s;
}
.short-close{
    position: absolute;
    bottom: 0.16rem;
    left: 50%;
    margin-left: -0.4rem;
    width: 0.8rem;
    height: 0.8rem;
    transform: rotate(0deg);
    animation: close 0.4s;
}

@keyframes shade {
    0% {
        opacity: 0;
    }
}

@keyframes close {
    0% {
        transform: rotate(225deg);
    }
}

@keyframes item {
    0% {
        display: none;
        left: 50%;
        margin-left: -0.48rem;
        bottom: 0;
    }
}

@keyframes title {
    0% {
        opacity: 0;
    }
    80% {
        opacity: 0;
    }
}
</style>
