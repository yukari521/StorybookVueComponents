<template>
  <div class="tabbar-list">
      <div class="tabbar-item" v-for="(item,index) in tabbarList" :key="index">
          <div class="tabbar-icon">
              <i :class="activedIndex===index?item.actived:item.icon"></i>
          </div>
          <div class="tabbar-title">{{item.text}}</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            tabbarList:[
                {path:'/',text:'首页',icon:'icon-home',actived:'icon-home-fill'},
                {path:'/',text:'分类',icon:'icon-appstore',actived:'icon-appstore-fill'},
                {path:'/',text:'热门',icon:'icon-fire',actived:'icon-fire-fill'},
                {path:'/',text:'设置',icon:'icon-setting',actived:'icon-setting-fill'}
            ],
            activedIndex:0
        }
    }
}
</script>

<style>

</style>