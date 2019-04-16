import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import "./assets/css/index.css";
import "./assets/js/index.js";
import './assets/js/api.js';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})