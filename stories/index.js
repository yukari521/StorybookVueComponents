import { storiesOf } from '@storybook/vue';
import test from '../components/test.vue';
import cat from '../components/cat.vue';
import TextInput from '../components/input.vue'
import swiper3d from '../components/swiper3d.vue'

//使用组件
storiesOf('swiper',module).add('ImagesWall',()=>({
  components:{swiper3d},
  template:`<swiper3d />`
}))

storiesOf('test', module)
  .add('test', () => ({
    components:{test},
    template: `<div><test :msg="msg"/><el-button :disabled="isTesting" @click="onTap">{{msg}}</el-button></div>`,
    data(){
      return {
        msg:'测试'
      }
    },
    computed:{
      isTesting(){
        if(this.msg==='测试'){
          return false
        }else{
          return true
        }
      }
    },
    methods:{
      onTap(){
        this.msg = '测试中。。。'
      }
    }
  }))
  .add('cat',()=>({
    components:{cat},
    template: '<cat/>',
    created(){
      this.onReady()
    },
    methods:{
      onReady(){
        this.msg = '123'
      }
    }
  }))
  .add('TextInput',()=>({
    components:{TextInput},
    template: '<text-input v-model="Name" />',
    data(){
      return {
        Name:'Ivan'
      }
    },
    watch:{
      Name:function(val){
        console.log('Name changed!')
      }
    }
  }))