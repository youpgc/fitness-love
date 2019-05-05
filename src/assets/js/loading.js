import vue from 'vue';

import loading from '../../components/tool/loading'

const LoadingConstructor = vue.extend(loading)

function showLoading(type = true) {
    const loadingDom = new LoadingConstructor({
        el: document.createElement('div'),
        data() {
            return {
                show: type
            }
        }
    })
    document.body.appendChild(loadingDom.$el)
}

function regLoading() {
    vue.prototype.$loading = showLoading
}
export default regLoading;