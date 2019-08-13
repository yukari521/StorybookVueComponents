import Loading from './Loading.vue';
let instance;
let el;

Loading.install = function (Vue, options = {}) {
  const defaultOptions = {
    show: false,
    text: '加载中',
    spinner: 'config'
};
  let LoadingInstance = Vue.extend(Loading);
  el = document.createElement('div');
  document.body.appendChild(el);
  instance = new LoadingInstance({defaultOptions}).$mount(el);

  Vue.prototype.$loading = {
    show(options = {}) {
      instance.show = true;
      if (options) {
         instance.text = options.text || defaultOptions.text;
         instance.spinner = options.spinner || defaultOptions.spinner;
      }
    },
    hide() {
      instance.show = false;
    }
  };
};
export default Loading;
