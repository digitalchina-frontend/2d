<template>
  <svg class="bg" height="400" width="400">
    <svg-line
      v-for="line in lines"
      :key="line.id"
      :start="line.start"
      :end="line.end"
    ></svg-line>
    <svg-circle
      v-for="circle in circles"
      :key="circle.id"
      :point="circle.point"
    ></svg-circle>
  </svg>
</template>

<script>
import SvgLine from "./SvgLine.vue";
import SvgCircle from "./SvgCircle.vue";

function midpoint(start, end) {
  const { x: x1, y: y1 } = start.point;
  const { x: x2, y: y2 } = end.point;
  return {
    id: 3,
    point: { x: (x1 + x2) / 2, y: (y1 + y2) / 2 },
  };
}

function verticalPoint(start, end, d) {
  const A = start.point;
  const B = end.point;
  return {
    id: 4,
    point: {
      x:
        B.x +
        (d * (A.y - B.y)) /
          Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2)),
      y:
        B.y -
        (d * (A.x - B.x)) /
          Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2)),
    },
  };
}

export default {
  components: {
    SvgLine,
    SvgCircle,
  },
  data() {
    return {
      lines: [
        {
          id: 1,
          start: {
            x: 100,
            y: 100,
          },
          end: {
            x: 300,
            y: 300,
          },
        },
      ],
      circles: [
        {
          id: 1,
          point: { x: 100, y: 100 },
        },
        {
          id: 2,
          point: { x: 300, y: 300 },
        },
      ],
    };
  },
  created() {
    const [start, end] = this.circles;
    const mid = midpoint(start, end);
    this.circles.push(mid);
    this.circles.push(verticalPoint(end, mid, 100));
  },
};
</script>

<style>
.bg {
  background-color: lightgray;
}
</style>
