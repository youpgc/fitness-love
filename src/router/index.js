import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 * 动态导入页面组件
 * @param  {...string} paths - 路径片段
 * @returns {Function} 组件导入函数
 */
const loadPage = (...paths) => {
  const path = paths.join('/');
  return () => import(`@/page/${path}`);
};

/**
 * 路由配置
 */
const routes = [
  // 默认路由
  {
    path: '*',
    redirect: '/'
  },
  
  // 主页 - 日记
  {
    path: '/',
    name: 'diaryIndex',
    alias: '/diaryIndex',
    component: loadPage('diary', 'index')
  },
  {
    path: '/msgIndex',
    name: 'msgIndex',
    component: loadPage('diary', 'message')
  },
  {
    path: '/mine',
    name: 'mine',
    component: loadPage('diary', 'mine')
  },
  {
    path: '/meal',
    name: 'meal',
    component: loadPage('diary', 'meal')
  },
  {
    path: '/plan',
    name: 'plan',
    component: loadPage('diary', 'planEdit')
  },
  
  // 运动
  {
    path: '/exeIndex',
    name: 'exeIndex',
    component: loadPage('exercires', 'index')
  },
  {
    path: '/exeSearch',
    name: 'exeSearch',
    component: loadPage('exercires', 'search')
  },
  {
    path: '/autoTrack',
    name: 'autoTrack',
    component: loadPage('exercires', 'autoTrack')
  },
  {
    path: '/addNewPlan',
    name: 'addNewPlan',
    component: loadPage('exercires', 'addNewPlan')
  },
  
  // 更多
  {
    path: '/moreIndex',
    name: 'moreIndex',
    component: loadPage('more', 'index')
  },
  {
    path: '/food_recipes',
    name: 'food_recipes',
    component: loadPage('more', 'food_recipes')
  },
  {
    path: '/devices',
    name: 'devices',
    component: loadPage('more', 'devices')
  },
  {
    path: '/blog',
    name: 'blog',
    component: loadPage('more', 'blog')
  },
  {
    path: '/blogInfo',
    name: 'blogInfo',
    component: loadPage('more', 'blogInfo')
  },
  
  // 训练
  {
    path: '/workIndex',
    name: 'workIndex',
    component: loadPage('workouts', 'index')
  },
  
  // 启动页和登录
  {
    path: '/startIndex',
    name: 'startIndex',
    component: loadPage('start', 'index')
  },
  {
    path: '/login',
    name: 'login',
    component: loadPage('login', 'login')
  },
  {
    path: '/register',
    name: 'register',
    component: loadPage('login', 'register')
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: loadPage('login', 'forgot')
  },
  
  // 注册步骤
  {
    path: '/step1',
    name: 'step1',
    component: loadPage('login', 'step1')
  },
  {
    path: '/step2',
    name: 'step2',
    component: loadPage('login', 'step2')
  },
  {
    path: '/step3',
    name: 'step3',
    component: loadPage('login', 'step3')
  },
  {
    path: '/step4',
    name: 'step4',
    component: loadPage('login', 'step4')
  },
  {
    path: '/step5',
    name: 'step5',
    component: loadPage('login', 'step5')
  },
  {
    path: '/step6',
    name: 'step6',
    component: loadPage('login', 'step6')
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
