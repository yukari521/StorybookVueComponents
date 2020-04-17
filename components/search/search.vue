<template>
  <div class="page-container">
      <div class="search-content">
          <input class="search-input" type="text">
          <div class="search-box">
              <div class="search-line"></div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.page-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #7e3ec5;
}
.search-content{
    width: 540px;
    height: 540px;
    position: relative;
}
.search-box{
    position: absolute;
    top: 250px;
    left: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 50%;
    transform: rotate(-45deg);
}
.search-input{
    z-index: 999;
    position: absolute;
    top: 255px;
    left: 255px;
    border: none;
    background: transparent;
    outline: none;
    color: transparent;
    text-shadow: 0 0 0 #fff;
    width: 30px;
    height: 30px;
    font-size: 24px;
    transform: rotate(-45deg);
}
.search-line{
    position: absolute;
    top:0;
    left: 0;
    width: 27px;
    height: 2px;
    background: #fff;
    transform-origin: 0% 50%;
    transform: rotate(45deg) translate(27px,0px) rotate(45deg) translate(21px,0px);
    text-align: left;
}
.search-input:focus{
    animation: a3 3s;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
}
.search-input:focus + .search-box{
    animation: a2 3s;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
}
.search-input:focus + .search-box>.search-line{
    animation: a1 3s;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
}

@keyframes a1 { /**.search-line */
    0% {
        transform: rotate(45deg) translate(27px,0px) rotate(45deg) translate(21px,0px);
    }
    25%{
        transform: rotate(45deg) translate(27px,0px) rotate(45deg) translate(21px,0px);
    }
    50% {
        transform: rotate(45deg) translate(27px,0px) rotate(45deg) translate(21px,0px) translate(-35px,0);
        left: 0;
    }
    75% {
        transform: rotate(45deg) translate(27px,0px) rotate(45deg) translate(21px,0px) translate(-35px,0);
        opacity: 1;
        left: -10px;
    }
    100% {
        transform: rotate(45deg) translate(27px,0px) rotate(45deg) translate(21px,0px) translate(-35px,0);
        opacity: 0;
        left: -10px;
    }
}
@keyframes a2 {
    0% {
        transform-origin: 50% 50%;
       transform: rotate(-45deg);
    }
    25% {
        transform-origin: 50% 50%;
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(0deg);
        width: 40px;
        left:255px;
        border-radius: 50%;
    }
    100% {
        transform: rotate(0deg);
        width: 140px;
        left:187px;
        border-radius: 6px;
    }
}
@keyframes a3 {
    0% {
        transform: rotate(-45deg);
    }
    25% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(0deg);
        color: transparent;
        text-shadow: 0 0 0 #fff;
        width: 30px;
        left:250px;
    }
    100% {
        transform: rotate(0deg);
        color: #fff;
        text-shadow: none;
        width: 130px;
        left:195px;
    }
}
</style>