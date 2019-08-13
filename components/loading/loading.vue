<template>
  <keep-alive v-if="show">
    <div class="v-loading">
      <!-- 效果一 -->
      <div class="spinner-box" v-if="spinner==='circle'">
        <div class="circle-border">
          <div class="circle-core"></div>
        </div>
      </div>

      <!-- 效果二 -->
      <div class="spinner-box" v-else>
        <div class="configure-border-1">
          <div class="configure-core"></div>
        </div>
        <div class="configure-border-2">
          <div class="configure-core">
            <!-- <img src="../../assets/img/logo_icon.png" alt=""> -->
          </div>
        </div>
      </div>
      <div class="loading-msg" v-if="text">
        <span class="loading-text">{{text}}</span>
        <span class="dot">...</span>
      </div>
    </div>
  </keep-alive>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: '加载中',
      required: false
    },
    spinner: {
      type: String,
      default: 'circle',
      required: false
    }
  },
  methods: {
    preventDefault() {
      // 禁止body的滚动
      document.body.addEventListener('touchmove', function(e) {
        e.preventDefault();
        e.stopPropagation();
      });
    }
  },
  mounted() {},
  destroyed() {}
};
</script>

<style>
.v-loading {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background-color: hsla(0, 0%, 100%, 0.9);
  margin: 0;
  justify-content: center;
  align-items: center;
}
.loading-msg {
  width: 100%;
  text-align: center;
  margin: 5px 0 0 0;
  font-size: 1em;
  color: #08214c;
}
.spinner-img {
  width: 66px;
  height: 66px;
  animation: loadRotate 1.5s linear infinite;
}
.dot {
  font-family: simsun;
  animation: dot 3s infinite step-start;
}
:root .dot {
  display: inline-block;
  width: 1.5em;
  vertical-align: bottom;
  overflow: hidden;
}
@keyframes dot {
  0% {
    width: 0;
    margin-right: 1.5em;
  }
  33% {
    width: 0.5em;
    margin-right: 1em;
  }
  66% {
    width: 1em;
    margin-right: 0.5em;
  }
  100% {
    width: 1.5em;
    margin-right: 0;
  }
}
@keyframes loadRotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* KEYFRAMES */

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes configure-clockwise {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

@keyframes configure-xclockwise {
  0% {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-135deg);
  }
  75% {
    transform: rotate(-215deg);
  }
  100% {
    transform: rotate(-305deg);
  }
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0.25;
    transform: scale(0.75);
  }
}

/* GRID STYLING */

.spinner-box {
  width: 40vw;
  height: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

/* SPINNING CIRCLE */

.circle-border {
  width: 20vw;
  height: 20vw;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(0, 188, 212);
  background: linear-gradient(
    0deg,
    rgba(0, 188, 212, 0.1) 33%,
    rgba(0, 188, 212, 1) 100%
  );
  animation: spin 0.8s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 100%, 1);
  border-radius: 50%;
}

/* X-ROTATING BOXES */

.configure-border-1 {
  width: 100px;
  height: 100px;
  padding: 2px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffab91;
  animation: configure-clockwise 3s ease-in-out 0s infinite;
}

.configure-border-2 {
  width: 100px;
  height: 100px;
  padding: 2px;
  left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 188, 212);
  transform: rotate(45deg);
  animation: configure-xclockwise 3s ease-in-out 0s infinite;
}

.configure-core {
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 100%, 0.9);
}
</style>
