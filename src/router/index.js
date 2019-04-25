import Vue from 'vue'
import Router from 'vue-router'
import diaryIndex from '@/page/diary/index'
import msgIndex from '@/page/diary/message'
import plan from '@/page/diary/planEdit'
import exeIndex from '@/page/exercires/index'
import moreIndex from '@/page/more/index'
import workIndex from '@/page/workouts/index'
import startIndex from '@/page/start/index'
import login from '@/page/login/login'
import register from '@/page/login/register'
import step1 from '@/page/login/step1'
import step2 from '@/page/login/step2'
import step3 from '@/page/login/step3'
import step4 from '@/page/login/step4'
import step5 from '@/page/login/step5'
import step6 from '@/page/login/step6'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'diaryIndex',
        component: diaryIndex,
        alias: '/diaryIndex'
    }, {
        path: '/msgIndex',
        name: 'msgIndex',
        component: msgIndex
    }, {
        path: '/plan',
        name: 'plan',
        component: plan
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
    }, {
        path: '/register',
        name: 'register',
        component: register
    }, {
        path: '/step1',
        name: 'step1',
        component: step1
    }, {
        path: '/step2',
        name: 'step2',
        component: step2
    }, {
        path: '/step3',
        name: 'step3',
        component: step3
    }, {
        path: '/step4',
        name: 'step4',
        component: step4
    }, {
        path: '/step5',
        name: 'step5',
        component: step5
    }, {
        path: '/step6',
        name: 'step6',
        component: step6
    }]
})