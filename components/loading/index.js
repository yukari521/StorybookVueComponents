import LoadingComponent from './loading.vue'

const Loading = {};

// 注册Loading
Loading.install = function (Vue,options) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const LoadingConstructor = Vue.extend(LoadingComponent)
    let propsData = {};
    if(!!options){
      if(options.color){
        propsData.color = options.color;
      }
    }
    // 生成一个该子类的实例
    const instance = new LoadingConstructor({
        propsData:propsData
    });

    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    instance.$mount(document.createElement('div'))
    // document.body.appendChild(instance.$el)

    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法
    Vue.prototype.$BMloading = (ID,options) => {
      let _opacity = 1;
      if(!!options && options.opacity && !isNaN(options.opacity)){
        _opacity = options.opacity;
      }
      if(_opacity < 0){
        _opacity = 0;
      }
      if(_opacity > 1){
        _opacity = 1;
      }

      let vueEl = instance.$el,
      loadingPanel = document.getElementById(ID);
      if(!loadingPanel){
        loadingPanel = document.body;
      }

      let opacityCss = "";
      if(!!options){
        if(options.opacityType == "black"){
          opacityCss = "background-color:rgba(0,0,0,"+_opacity+")";
        }
        if(options.opacityType == "white"){
          opacityCss = "background-color:rgba(255,255,255,"+_opacity+")";
        }
      }

      vueEl.setAttribute("style",opacityCss);

      if(!!loadingPanel){
        addRelative(loadingPanel)
        vueEl.setAttribute("ID",getVueElId(ID));
        loadingPanel.appendChild(vueEl)
      }
    }
    Vue.prototype.$BMloadingFinish = (ID) => {
      let vueEl = document.getElementById(getVueElId(ID));
      if(!vueEl){
        vueEl = document.body;
      }
      if(!!vueEl){
        removeDOM(vueEl);
      }
    }
}

function getVueElId(ID){
  return ID+"-dami-loading";
}

function addRelative(ele){
  var style = window.getComputedStyle(ele, null);
  if("static" == style["position"]){
    ele.style.position = "relative";
  }
}

function removeDOM(el){
  el.parentNode.removeChild(el);
}

export default Loading
