<template>
  <div class="nav">
    <ul class="tab">
      <li class="list-item" v-for="(item,index) in tab" :key="index" :class="{'on':index == grade}">
        <router-link :to="item.path" v-if="!item.other">
          <div class="nav-icon">
            <img :style="item.style" :src="item.on" v-if="index == grade">
            <img :style="item.style" :src="item.src" v-else>
          </div>
          <div class="f20 nav-lab">{{item.label}}</div>
        </router-link>
        <div class="nav-other" @click="getMore" v-else>
            <img :src="item.src"/>
        </div>
      </li>
    </ul>
    <menu-html v-if="menu.more" @menu="getMore" @link="getLink"></menu-html>
    <cut-html v-if="menu.cut" @closecut="closeCut" v-bind:cut="menu.checked"></cut-html>
  </div>
</template>

<script>
import menuHtml from '@/components/common/short';
import cutHtml from '@/components/common/shortCut';
export default {
  components: {
    menuHtml,
    cutHtml
  },
  props: ['grade'],
  name: 'navBar',
  data() {
    return {
      tab: [
        {
          label: 'Diary',
          path: '/',
          src: require('@/assets/images/home-02.png'),
          on: require('@/assets/images/home-03.png'),
          style: 'width: 0.58rem;height:0.58rem'
        },
        {
          label: 'Exercires',
          path: '/exeIndex',
          src: require('@/assets/images/home-04.png'),
          on: require('@/assets/images/home-05.png'),
          style: 'width: 0.66rem;height:0.5rem'
        },
        {
          label: '',
          path: '',
          other: true,
          src: require('@/assets/images/home-01.png'),
        },
        {
          label: 'Workouts',
          path: '/workIndex',
          src: require('@/assets/images/home-06.png'),
          on: require('@/assets/images/home-07.png'),
          style: 'width: 0.56rem;height:0.56rem'
        },
        {
          label: 'More',
          path: '/moreIndex',
          src: require('@/assets/images/home-08.png'),
          on: require('@/assets/images/home-09.png'),
          style: 'width: 0.56rem;height:0.5rem'
        },
      ],
      menu: {
        more: false,
        cut: false,
        checked: '',
      }
    };
  },
  methods: {
    getMore(){
      var status = this.menu.more;
      this.menu.more = !status;
    },
    getLink(type){
      this.menu.more = false;
      if(type == 'water' || type == 'food'){
        this.menu.checked = type;
        this.menu.cut = true;
      }
    },
    closeCut(){
      this.menu.cut = false;
      this.menu.checked = '';
    }
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 1.1rem;
  box-shadow: 0 -0.05rem 0.2rem 0 #ddd;
  background: #fff;
}
.tab {
  width: 100%;
  height: 1.1rem;
}
.list-item {
  float: left;
  list-style: none;
  width: 20%;
  height: 1.1rem;
  font-size: 0.3rem;
  text-align: center;
  color: #888;
}
.list-item a {
  padding: 0.12rem 0;
  display: block;
}
.nav-icon {
  height: 0.66rem;
  position: relative;
}
.nav-icon img{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.nav-lab {
  font-size: 0.22rem;
  color: #6d819c;
}
.list-item.on .nav-lab {
  color: #ff4500;
}
.nav-other{
  padding: 0.15rem 0;
}
.nav-other img{
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  box-shadow: 0 0.05rem 0.16rem 0 rgba(0, 0, 0, 0.4);
}
</style>
