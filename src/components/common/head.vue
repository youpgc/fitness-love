<template>
  <div class="head">
    <div class="head-cont">
      <div class="head-title">{{head.text}}</div>
      <div class="head-back" v-if="head.src">
        <a v-if="!head.href" @click="back"><img :src="head.src" class="icon-back fl" /></a>
        <router-link v-if="head.href" :to="head.href"><img :src="head.src" class="icon-back fl" /></router-link>
      </div>
	    <div class="head-frfun" @click="getFun" v-if="head.icon || head.span">
        <img :src="head.icon" class="fl" :class="head.iconclass?head.iconclass:iconStyle" v-if="head.icon"/>
        <span v-if="head.span">{{head.span}}</span>
      </div>
      <div class="head-flfun" @click="getIcon" v-if="head.icon1">
        <img :src="head.icon1" class="fl icon-flfun"/>
      </div>
    </div>
  </div>
</template>
/*
* head.text//标题
*
* head.src//返回图标&返回上一页
* head.href//返回地址
*
* head.icon//右浮图标
* head.icon && head.iconclass//右浮图标类名
* head.span//右浮文字
* (head.icon || head.span) && headfun//(右浮图标||右浮文字)&绑定事件
*/
<script>
export default {
  props: ["head"],
  name: "headBar",
  data() {
    return {
      iconStyle: "icon-frfun"
    };
  },
  methods: {
    getFun() {
      this.$emit("headfun");
    },
    getIcon(){
      this.$emit('headicon');
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.head {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.36rem;
  color: #222;
  background: #fff;
  box-shadow: 0 0.05rem 0.2rem 0 rgba(0,0,0,0.2);
  padding: 0 0.3rem;
  overflow: hidden;
}
.head-cont {
  height: 0.88rem;
  position: relative;
  overflow: hidden;
}
.head-back {
  position: absolute;
  left: 0;
  top: 0;
}
.head-back a {
  display: flex;
  height: 0.88rem;
  align-items: center;
}
.head-title {
  max-width: 5.9rem;
  text-align: center;
  margin: 0 auto;
}
.icon-back {
  width: 0.5rem;
  height: 0.5rem;
}
.icon-frfun {
  width: 0.47rem;
  height: 0.43rem;
  display: block;
}
.head-flfun{
  height: 0.88rem;
  position: absolute;
  right: 0.88rem;
  top: 0;
  display: flex;
  align-items: center;
}
.icon-flfun{
  display: block;
  width: 0.32rem;
  height: 0.44rem;
}
.icon-search{
  display: block;
  width: 0.44rem;
  height: 0.44rem;
}
.icon-add{
  display: block;
  width: 0.42rem;
  height: 0.42rem;
}
.icon-msg{
  display: block;
  width: 0.4rem;
  height: 0.48rem;
}
.head-frfun {
  position: absolute;
  right: 0;
  top: 0;
  display: flex !important;
  height: 0.88rem;
  align-items: center;
  font-size: 0.36rem;
}
</style>
