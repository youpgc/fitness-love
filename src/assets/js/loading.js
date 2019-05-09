import LoadingComponent from '../../components/tool/loading'

const loading = {}

loading.install = function(Vue) {
    Vue.prototype.$loading = {};
    Vue.prototype.$loading.show = (config) => {
        const LoadingConstructor = Vue.extend(LoadingComponent)
        const instance = new LoadingConstructor()
        document.body.appendChild(instance.$mount().$el)
        if (config) {
            instance.text = config.text
            instance.type = true
            if (config.size) {
                instance.size = config.size
            } else {
                instance.size = 36;
            }
        }
    }
    Vue.prototype.$loading.hide = () => {
        var loadingDiv = document.querySelector('#loading');
        if (loadingDiv) {
            document.body.removeChild(loadingDiv)
        }
    }
}
export default loading;