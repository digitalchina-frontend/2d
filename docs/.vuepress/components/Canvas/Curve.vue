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
    this.draw();
  },
  methods: {
    genPoint() {
      return {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
      };
    },
    drawPoint(point) {
      this.context.fillRect(point.x - 4, point.y - 4, 8, 8);
    },
    draw() {
      const p0 = this.genPoint(),
        p1 = this.genPoint(),
        p2 = this.genPoint();

      this.context.beginPath();
      this.context.moveTo(p0.x, p0.y);
      this.context.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
      this.context.stroke();

      this.drawPoint(p0);
      this.drawPoint(p1);
      this.drawPoint(p2);
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
