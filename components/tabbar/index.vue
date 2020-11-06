<!--
 * @Author: your name
 * @Date: 2020-11-03 15:23:45
 * @LastEditTime: 2020-11-04 18:01:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IvanProject\StorybookVueComponents\components\tabbar\index.vue
-->
<template>
    <div class="phone-container">
        <div class="tabbar-list">
            <div class="tabbar-active" :style="{'left':activedIndex*80+'px'}">
                <div class="left-active"></div>
                <div class="right-active"></div>
            </div>
            <div class="tabbar-item" v-for="(item,index) in tabbarList" :key="index" @click="onClick(index)">
                <div class="tabbar-icon">
                    <i :class="['iconfont',item.icon,activedIndex===index?'actived':'']"></i>
                </div>
                <!-- <div class="tabbar-title">{{item.text}}</div> -->
            </div>
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
    },
    methods:{
        onClick(index){
            this.activedIndex = index
        }
    }
}
</script>

<style>
.phone-container{
    position: relative;
    width: 320px;
    min-height: 230px;
    margin: 0 auto;
    overflow: hidden;
    background-color: #423B5D;
    border-radius: 0 0 6px 6px;
}
.tabbar-list{
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #E96363;
}
.tabbar-item{
    display: flex;    
    width: 80px;
    justify-content: center;
    align-items:center;    
}
.tabbar-icon{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    color: #fff;
}
.tabbar-icon>i.iconfont{
    font-size: 24px;
}
.tabbar-icon>i.iconfont.actived{
    position: absolute;
    top: -10px;
    font-size: 36px;
}
.tabbar-active{
    position: absolute;
    top: -25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    height: 25px;
}
.left-active{
    position: relative;
    left: -10px;
    width: 25px;
    height: 25px;
    background-color: #E96363;
}
div.left-active::before{
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 25px;
    height: 25px;
    background-color: #423B5D;
    border-bottom-right-radius: 50%;
}
div.left-active::after{
    position: absolute;
    top: 0;
    left:25px;
    content: '';
    width: 25px;
    height: 25px;
    background-color: #E96363;
    border-top-left-radius: 20px;
}
.right-active{
    position: relative;
    right: -10px;
    width: 25px;
    height: 25px;
    background-color: #E96363;
}
div.right-active::before{
    position: absolute;
    top: 0;
    right: 25px;
    content: '';
    width: 25px;
    height: 25px;
    background-color: #E96363;
    border-top-right-radius: 20px;
}
div.right-active::after{
    position: absolute;
    top: 0;
    right:0;
    content: '';
    width: 25px;
    height: 25px;
    background-color: #423B5D;
    border-bottom-left-radius: 50%;
}
</style>