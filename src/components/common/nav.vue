<template>
  <div class="nav">
    <ul class="tab">
      <li class="list-item" v-for="(item,index) in tab" :key="index" :class="{'on':index == grade}">
        <router-link :to="item.path">
          <div class="nav-icon">
            <img :src="item.on" v-if="index == grade">
            <img :src="item.src" v-else>
          </div>
          <div class="f20 nav-lab">{{item.label}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['grade'],
  name: 'navBar',
  data() {
    return {
      tab: [
        {
          label: 'Diary',
          isClick: false,
          path: '/diaryIndex',
          src: require('@/assets/images/home-02.png'),
          on: require('@/assets/images/home-03.png'),
        },
        {
          label: 'Exercires',
          isClick: false,
          path: '/exeIndex',
          src: require('@/assets/images/home-04.png'),
          on: require('@/assets/images/home-05.png'),
        },
        {
          label: '',
          isClick: false,
          path: '',
          src: require('@/assets/images/home-01.png'),
          on: require('@/assets/images/home-01.png'),
        },
        {
          label: 'Workouts',
          isClick: false,
          path: '/workIndex',
          src: require('@/assets/images/home-06.png'),
          on: require('@/assets/images/home-07.png'),
        },
        {
          label: 'More',
          isClick: false,
          path: '/moreIndex',
          src: require('@/assets/images/home-08.png'),
          on: require('@/assets/images/home-09.png'),
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.88rem;
  box-shadow: 0 0 0.1rem 0 #ddd;
  background: #fff;
}
.tab {
  width: 100%;
  height: 0.88rem;
}
.list-item {
  float: left;
  list-style: none;
  width: 20%;
  height: 0.88rem;
  font-size: 0.3rem;
  text-align: center;
  color: #888;
}
.list-item a {
  padding: 0.07rem 0;
  display: block;
}
.nav-icon {
  height: 0.5rem;
}
.nav-icon img {
  width: 0.5rem;
  height: 0.5rem;
}
.nav-lab {
  display: block;
  margin-top: -0.07rem;
  width: 125%;
}
.list-item.on a {
  color: #ff4500;
}
</style>
