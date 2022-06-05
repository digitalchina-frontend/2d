<template>
  <canvas ref="canvas" width="512" height="512"></canvas>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      context: null,
      canvas: null,
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.context = this.canvas.getContext("2d");
    this.drawRect();
  },
  methods: {
    drawRect() {
      this.context.fillStyle = "red";
      this.context.beginPath();
      this.context.rect(0, 0, 215, 215);
      this.context.fill();
    },
  },
};
</script>

<style>
canvas {
  width: 256px;
  height: 256px;
  background-color: #efefef;
  margin-top: 20px;
}
</style>
