import {
  storiesOf
} from '@storybook/vue';
import test from '../components/test.vue';
import cat from '../components/cat.vue';
import TextInput from '../components/input.vue'
import swiper3d from '../components/swiper3d.vue'
import chrome from '../components/chrome.vue'
import zdog from '../components/zdog.vue'
import lineChart from '../components/echarts/lineChart.vue'
import loading from '../components/loading/loading.vue'
import Search from '../components/search/search.vue'
import Tabbar from '../components/tabbar/index.vue'
import Scroll from '../components/scroll.vue'

//使用组件
storiesOf('charts', module)
  .add('lineChart', () => ({
    components: {
      lineChart
    },
    template: `<lineChart/>`
  }))

storiesOf('loading', module)
  .add('loading', () => ({
    components: {
      loading
    },
    template: `<loading :show="true" spinner="other" text="loading"/>`
  }))

storiesOf('zdog', module)
  .add('zdog', () => ({
    components: {
      zdog
    },
    template: `<zdog/>`
  }))

storiesOf('swiper', module)
  .add('ImagesWall', () => ({
    components: {
      swiper3d
    },
    template: `<swiper3d />`
  }))
  .add('chrome', () => ({
    components: {
      chrome
    },
    template: `<chrome/>`
  }))

storiesOf('test', module)
  .add('cat', () => ({
    components: {
      cat
    },
    template: '<cat/>',
    created() {
      this.onReady()
    },
    methods: {
      onReady() {
        this.msg = '123'
      }
    }
  }))

storiesOf('search', module)
  .add('search', () => ({
    components: {
      Search
    },
    template: '<Search/>'
  }))

storiesOf('tabBar', module)
  .add('tabBar', () => ({
    components: {
      Tabbar
    },
    template: '<Tabbar/>'
  }))

storiesOf('scroll', module)
  .add('scroll', () => ({
    components: {
      Scroll
    },
    template: '<Scroll/>'
  }))