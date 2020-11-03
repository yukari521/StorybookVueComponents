<!--
 * @Author: your name
 * @Date: 2020-11-03 15:32:05
 * @LastEditTime: 2020-11-03 16:55:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IvanProject\StorybookVueComponents\components\buttons\circleButton.vue
-->
<template>
  <div class="circle-button" @touchstart.prevent="onTouchstart" @touchend.prevent="onTouchend">
      <div class="wrapper-left">
          <div :class="['progress-left',{'lighter-border':!isDynamic,'dynamic':isDynamic}]"></div>
      </div>
      <div class="wrapper-right">
          <div :class="['progress-right',{'lighter-border':!isDynamic,'dynamic':isDynamic}]"></div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isDynamic:false,
            Loop:0
        }
    },
    methods:{
        onTouchstart(){
            if(this.Loop){
                clearTimeout(this.Loop)
            }
            this.Loop = setTimeout(()=>{
                this.isDynamic = true
            },500)
            return false
        },
        onTouchend(){
            if(this.Loop) clearTimeout(this.Loop)
            this.isDynamic = false
            return false
        }
    }
}
</script>

<style>
@keyframes borderColor{
	0% {
		border-color:rgba(250,223,166,0)
	}
	50% {
		border-color:rgba(250,223,166,1)
	}
	100% {
		border-color:rgba(250,223,166,0)
	}
}
@keyframes dynamicLeft {
    0% {
		border-bottom: 6px solid #fff;
		border-left: 6px solid #fff;
		transform: rotate(45deg);
	}
	50% {
		border-bottom: 6px solid #fff;
		border-left: 6px solid #fff;
		border-top: 6px solid #fadfa6;
		border-right: 6px solid #fadfa6;
		transform: rotate(45deg);
	}
	100% {
		border-top: 6px solid #fadfa6;
		border-right: 6px solid #fadfa6;
		border-left: 6px solid #fff;
		border-bottom: 6px solid #fff;
		transform: rotate(225deg);
	}
}
@keyframes dynamicRight {
    0% {
		border-top: 6px solid #fff;
		border-right: 6px solid #fff;
		transform: rotate(45deg);
	}
	50% {
		border-top: 6px solid #fff;
		border-right: 6px solid #fff;
		border-left: 6px solid #fadfa6;
		border-bottom: 6px solid #fadfa6;
		transform: rotate(225deg);
	}
	100% {
		border-left: 6px solid #fadfa6;
		border-bottom: 6px solid #fadfa6;
		transform: rotate(225deg);
	}
}
</style>
<style scoped>
.circle-button{
    position: relative;
    width: 100px;
    height: 100px;
    margin: 20px auto;
    background: #FF952C;
	border-radius: 50%;
    user-select: none;
    cursor: pointer;
}
.wrapper-left{
    position: absolute;
    top: -6px;
    left: -6px;
    width: 56px;
	height: 112px;
    overflow: hidden;
}
.wrapper-right{
    position: absolute;
    top: -6px;
    right: -6px;
    width: 56px;
	height: 112px;
    overflow: hidden;
}
.progress-left {
    position: absolute;
	top: 0;
    left: 0;
    box-sizing: content-box;
	width: 100px;
	height: 100px;
	border: 6px solid transparent;
	border-radius: 50%;
	transform: rotate(45deg);	
}
.progress-right {
    position: absolute;
	top: 0;
    right: 0;
    box-sizing: content-box;
	width: 100px;
	height: 100px;
	border: 6px solid transparent;
	border-radius: 50%;
	transform: rotate(45deg);	
}
.lighter-border{
    animation: borderColor 2s linear infinite;
}
.progress-left.dynamic {
	animation: dynamicLeft 4s linear 1;
}

.progress-right.dynamic {
	animation: dynamicRight 4s linear 1;
}
</style>
