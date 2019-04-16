import Vue from 'vue'
import Router from 'vue-router'
import diaryIndex from '@/page/diary/index'
import exeIndex from '@/page/exercires/index'
import moreIndex from '@/page/more/index'
import workIndex from '@/page/workouts/index'
import startIndex from '@/page/start/index'
import login from '@/page/login/login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'diaryIndex',
        component: diaryIndex,
        alias: '/diaryIndex'
    }, {
        path: '/exeIndex',
        name: 'exeIndex',
        component: exeIndex,
    }, {
        path: '/moreIndex',
        name: 'moreIndex',
        component: moreIndex,
    }, {
        path: '/workIndex',
        name: 'workIndex',
        component: workIndex,
    }, {
        path: '/startIndex',
        name: 'startIndex',
        component: startIndex,
    }, {
        path: '/login',
        name: 'login',
        component: login,
    }]
})