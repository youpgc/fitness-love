import vue from 'vue';

import toast from '../../components/tool/toast'

const ToastConstructor = vue.extend(toast)

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
            }
        }
    })
    document.body.appendChild(toastDom.$el)
    if (!type) {
        setTimeout(() => { toastDom.show = false }, duration)
    }
}

function regToast() {
    vue.prototype.$toast = showToast
}
export default regToast;