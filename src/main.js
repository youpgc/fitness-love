import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import DB from './assets/js/DB';
import toast from './assets/js/toast';
import loading from './assets/js/loading'
import 'swiper/dist/css/swiper.css';
import "./assets/css/index.css";
import "./assets/js/index.js";
import './assets/js/api.js';

Vue.config.productionTip = false;
Vue.prototype.DB = DB;
Vue.use(VueAwesomeSwiper);
Vue.use(toast);
Vue.use(loading);
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})