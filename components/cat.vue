<template>
    <div class="cat-box"></div>
</template>

<script>
export default {

}
</script>

<style>
.cat-box{
    width: 200px;
    height: 100px;
    margin: 100px auto;
    background: #37acff;
    position: relative;
}
.cat-box::before{
    content: '';
    position: absolute;
    top:-10px;
    left: 0;
    width:200px;
    height: 20px;
    border-radius: 50%;
    background: #37acff;
    animation: catBefore 4s ease-in-out infinite alternate;
    transform-origin:0% 50%;
}
.cat-box::after{
    content: '';
    position: absolute;
    bottom:-10px;
    left: 0;
    width:200px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    animation: catAfter 4s ease-in-out infinite alternate;
    transform-origin:100% 50%;
}
@keyframes catAfter {
    0% {
        height: 20px;
        bottom: -10px;
    }
    100% {
        height: 200px;
        bottom: -100px;
    }
}
@keyframes catBefore {
    0% {
        height: 20px;
        top: -10px;
    }
    100% {
        height: 200px;
        top: -100px;
    }
}
</style>
