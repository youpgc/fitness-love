import Vue from 'vue'
import Router from 'vue-router'
import diaryIndex from '@/page/diary/index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'diaryIndex',
        component: diaryIndex
    }]
})