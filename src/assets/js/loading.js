import LoadingComponent from '../../components/tool/loading'

const loading = {}

loading.install = function(Vue) {
    let currentInstance = null;

    Vue.prototype.$loading = {
        show(config) {
            // 先移除已有的loading实例，防止DOM累积
            if (currentInstance) {
                const el = document.querySelector('#loading');
                if (el) {
                    document.body.removeChild(el);
                }
            }
            const LoadingConstructor = Vue.extend(LoadingComponent);
            currentInstance = new LoadingConstructor();
            document.body.appendChild(currentInstance.$mount().$el);
            if (config) {
                currentInstance.text = config.text;
                currentInstance.type = true;
                currentInstance.size = config.size || 36;
            }
        },
        hide() {
            const loadingDiv = document.querySelector('#loading');
            if (loadingDiv) {
                document.body.removeChild(loadingDiv);
            }
            currentInstance = null;
        }
    };
};

export default loading;
