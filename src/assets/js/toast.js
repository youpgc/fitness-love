import Vue from 'vue';
import toast from '../../components/tool/toast';

const ToastConstructor = Vue.extend(toast);

function showToast(title, status = false, type = false, getCan = function() {}, getFun = function() {}, duration = 1000) {
    const toastDom = new ToastConstructor({
        el: document.createElement('div'),
        data() {
            return {
                title: title,
                status: status,
                type: type,
                getCan: getCan,
                getFun: getFun,
                show: true
            };
        }
    });
    document.body.appendChild(toastDom.$el);
    if (!type) {
        setTimeout(() => {
            toastDom.show = false;
            // 清理DOM，防止内存泄漏
            setTimeout(() => {
                if (toastDom.$el && toastDom.$el.parentNode) {
                    document.body.removeChild(toastDom.$el);
                }
                toastDom.$destroy();
            }, 300);
        }, duration);
    }
}

function regToast() {
    Vue.prototype.$toast = showToast;
}

export default regToast;
