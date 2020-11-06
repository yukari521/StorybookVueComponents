<!--
 * @Author: your name
 * @Date: 2020-11-05 11:17:32
 * @LastEditTime: 2020-11-05 11:32:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IvanProject\StorybookVueComponents\components\CrimsonCrescentLoading.vue
-->
<template>
  <div class="full-page">
      <div class="crimson-loading"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.full-page{
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: black;
}
.crimson-loading{
    position: relative;
  width: 8em;
  height: 8em;
  /* background-color:  rgba(0, 0, 0, .8); */
  border-radius: 50%;
  box-shadow: inset 0.5em -0.5em crimson;
  animation: spin 2s linear infinite;
}

.crimson-loading::before,
.crimson-loading::after{
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    box-shadow: inherit;
}

.crimson-loading::before{
    filter: blur(5px);
}
.crimson-loading::after{
    filter: blur(10px);
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
