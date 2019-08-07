<template>
  <div class="container" :style="transformStyle">
    <div class="image-box" v-for="(i,n) in imagesList" :key="n">
      <img :src="i.URL" alt />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imagesList: [],
      transformStyle: "",
      imagesUrl: "http://api.btstu.cn/sjbz/?lx=m_dongman"
    };
  },
  created() {
    let clock;
    for (var i = 0; i < 6; i++) {
      clock = setTimeout(() => {
        this.imagesList.push({
          URL: this.imagesUrl + "&" + i
        });
      }, 1000);
    }
    clearTimeout(clock);
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("mousemove", this.RotateBox, true);
    });
  },
  methods: {
    RotateBox(e) {
      let b = document.body;
      let w = b.clientWidth / 360;
      let h = b.clientHeight / 360;
      let rotateX = e.pageX / w;
      let rotateY = e.pageY / h;
      this.transformStyle = `transform:rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  }
};
</script>

<style>
.container {
  position: absolute;
  height: 200px;
  width: 200px;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
  transform-style: preserve-3d;
  background: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  transform: rotateX(45deg) rotateY(45deg);
}
.image-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  opacity: 0.8;
  overflow: hidden;
  border: 1px solid #eee;
}
.container .image-box:nth-of-type(1) {
  background: red;
  transform: translateX(-100px) rotateY(90deg);
}
.container .image-box:nth-of-type(2) {
  background: orange;
  transform: translateX(100px) rotateY(-90deg);
}
.container .image-box:nth-of-type(3) {
  background: green;
  transform: translateZ(100px) rotateY(0deg);
}
.container .image-box:nth-of-type(4) {
  background: yellow;
  transform: translateZ(-100px) rotateY(0deg);
}
.container .image-box:nth-of-type(5) {
  background: blue;
  transform: translateY(-100px) rotateX(90deg);
}
.container .image-box:nth-of-type(6) {
  background: purple;
  transform: translateY(100px) rotateX(90deg);
}
.image-box img {
  width: 100%;
  height: auto;
}
</style>
