<template>
  <div style="height:100000px;"></div>
</template>

<script>
import { Message } from "element-ui";
export default {
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.handleScroll, true);
    });
  },
  methods: {
    handleScroll() {
      Message({
        showClose: true,
        message: `document.documentElement.scrollTop:${document.documentElement.scrollTop}\ndocument.body.scrollTop:${document.body.scrollTop}`,
        type: "success"
      });
    }
  }
};
</script>

<style>
</style>