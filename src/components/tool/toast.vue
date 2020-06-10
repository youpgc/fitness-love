<template>
 <div class="tips" :class="{'tips-back':type}" v-if="show">
   <div class="tips-tip" v-if="!type">
     <div class="tips-via" v-if="status">
      <img v-if="status == 'error'" :src="imgUrl.close"/>
      <img v-if="status == 'correct'" :src="imgUrl.correct"/>
     </div>
     <div class="tips-tip-title" :class="{'tips-calc':status}">{{title}}</div>
   </div>
   <div class="tips-model" v-if="type == 1 || type == 2">
     <p class="tips-model-msg">{{title}}</p>
     <div class="tips-model-btn" @click="getFun" v-if="type == 1">确定</div>
     <div class="tips-model-btn" v-if="type == 2">
       <div class="tips-mb-item" @click="getCan">取消</div>
       <div class="tips-mb-item" @click="getFun">确定</div>
     </div>
   </div>
 </div>
</template>
/*
*
*carrier[vue],message[msg]
*
*仅文字
*showTips(carrier, message);
*
*图标+文字
*showTips(carrier, message, status);//status['error','correct']
*
*提示窗
*<tips @tipFun="tipFun"></tips>//tipFun[function]
*showTips(carrier, message, status, type);//status[false],type[1]
*
*选择窗(绑定事件)
*<tips @tipCan="tipCan" @tipFun="tipFun"></tips>//tipCan[cancel],tipFun[function]
*showTips(carrier, message, status, type);//status[false],type[2]
*
*/
<script>
export default {
  name: "tips",
  data() {
    return {
      imgUrl: {
        close: require("@/assets/images/error.png"),
        correct: require("@/assets/images/correct.png")
      }
    };
  }
};
</script>
<style scoped>
.tips {
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
  pointer-events: none;
}
.tips-back {
  background-color: rgba(0, 0, 0, 0.4);
}
.tips-tip {
  max-width: 6rem;
  padding: 6px 8px;
  background-color: rgba(41, 41, 41, 0.8);
  border-radius: 4px;
  color: #fff;
}
.tips-via {
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
}
.tips-via img {
  width: 20px;
  height: 20px;
}
.tips-tip-title {
  float: left;
  line-height: 20px;
  font-size: 14px;
  padding-left: 4px;
  vertical-align: middle;
}
.tips-calc {
  width: calc(100% - 20px);
}
.tips-model {
  width: 4.8rem;
  background: #fff;
  border-radius: 0.1rem;
  overflow: hidden;
  box-shadow: 0 0 0.1rem 0 rgba(41, 41, 41, 0.8);
}
.tips-model-msg {
  font-size: 0.3rem;
  word-break: unset;
  padding: 0.3rem 0.2rem;
  line-height: 0.6rem;
  text-align: center;
}
.tips-model-btn {
  border-top: 1px solid #ddd;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.3rem;
}
.tips-mb-item {
  width: 50%;
  float: left;
  position: relative;
}
.tips-mb-item:first-child::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0.2rem;
  height: 0.4rem;
  border-right: 1px solid #ddd;
}
</style>