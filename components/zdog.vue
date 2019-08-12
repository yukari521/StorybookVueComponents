<template>
  <div class="zdog-box">
    <canvas class="zdog-canvas" width="240" height="240"></canvas>
  </div>
</template>

<script>
import Zdog from "zdog";
export default {
  name: "zdog-demo",
  data() {
    return {
      isSpinning: true,
      illo: null
    };
  },
  mounted() {
    this.$nextTick(function() {
      let _this = this;
      let illo = new Zdog.Illustration({
        element: ".zdog-canvas",
        zoom: 4,
        dragRotate: true
      });

      // add shapes...
      new Zdog.Ellipse({
        addTo: illo,
        diameter: 80,
        stroke: 20,
        color: "#636"
      });

      // update & render
      illo.updateRenderGraph();
    });
  },
  methods: {
    animate() {
      if (this.isSpinning) {
        this.illo.rotate.y += 0.03;
      }
      this.illo.updateRenderGraph();
      //   requestAnimationFrame(animate);
    }
  }
};
</script>

<style>
.zdog-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
}
</style>
