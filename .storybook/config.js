import { configure } from '@storybook/vue';
import Vue from 'vue';
import '../assets/main.css';

//引入组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);
