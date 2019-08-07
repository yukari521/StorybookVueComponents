<style scoped>
  .dami-loading-panel{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background-color: white;
  }
  .dami-loading{
    width: 40px;
    height: 40px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .dami-loading-roll{
      width: 80px;
      height: 40px;
      margin: 0 auto;
  }
  .dami-loading-roll span{
      display: inline-block;
      width: 8px;
      height: 100%;
      border-radius: 4px;
  }
  .dami-loading-roll-light span{
      background: lightgreen;
      animation: load-light 1s ease infinite;
  }
  @keyframes load-light{
      0%,100%{
          height: 40px;
          background: lightgreen;
      }
      50%{
          height: 70px;
          margin: -15px 0;
          background: lightblue;
      }
  }
  .dami-loading-roll-dark span{
      background: #666666;
      animation: load-dark 1s ease infinite;
  }
  @keyframes load-dark{
      0%,100%{
          height: 40px;
          background: #666666;
      }
      50%{
          height: 70px;
          margin: -15px 0;
          background: #CC9999;
      }
  }
  .dami-loading-roll span:nth-child(2){
      animation-delay:0.2s;
  }
  .dami-loading-roll span:nth-child(3){
      animation-delay:0.4s;
  }
  .dami-loading-roll span:nth-child(4){
      animation-delay:0.6s;
  }
  .dami-loading-roll span:nth-child(5){
      animation-delay:0.8s;
  }
</style>

<template>
  <div class="dami-loading-panel">
    <div class="dami-loading">
      <div class="dami-loading-roll" :class="rollStyle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'loading',
    data (){
      return{

      }
    },
    props:{
      color:{
        type:String,
        default:"light"
      }
    },
    computed:{
      rollStyle(){
        if(this.color == "light"){
          return "dami-loading-roll-light";
        }
        if(this.color == "dark"){
          return "dami-loading-roll-dark";
        }
        return "dami-loading-roll-light";
      }
    },
    methods:{

    },
    mounted (){
    }
  }
</script>
