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
      :x="circle.x"
      :y="circle.y"
    ></svg-circle>
  </svg>
</template>

<script>
import SvgLine from "./SvgLine.vue";
import SvgCircle from "./SvgCircle.vue";

function midpoint(start, end) {
  const { x: x1, y: y1 } = start;
  const { x: x2, y: y2 } = end;
  return {
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2,
  };
}

function verticalPoint(A, B, d) {
  return {
    x:
      B.x +
      (d * (A.y - B.y)) /
        Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2)),
    y:
      B.y -
      (d * (A.x - B.x)) /
        Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2)),
  };
}

function createBezierPoints(anchorpoints, pointsAmount) {
  var points = [];
  for (var i = 0; i < pointsAmount; i++) {
    var point = multiPointBezier(anchorpoints, i / pointsAmount);
    points.push(point);
  }
  return points;
}

function multiPointBezier(points, t) {
  var len = points.length;
  var x = 0,
    y = 0;
  var binomial = function (start, end) {
    var cs = 1,
      bcs = 1;
    while (end > 0) {
      cs *= start;
      bcs *= end;
      start--;
      end--;
    }
    return cs / bcs;
  };
  for (var i = 0; i < len; i++) {
    var point = points[i];
    x +=
      point.x *
      Math.pow(1 - t, len - 1 - i) *
      Math.pow(t, i) *
      binomial(len - 1, i);
    y +=
      point.y *
      Math.pow(1 - t, len - 1 - i) *
      Math.pow(t, i) *
      binomial(len - 1, i);
  }
  return { x: x, y: y };
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
          x: 100,
          y: 100,
        },
        {
          x: 300,
          y: 300,
        },
      ],
    };
  },
  created() {
    const [start, end] = this.circles;
    const mid = midpoint(start, end);
    const vertical = verticalPoint(end, mid, 100);
    const anchorPoints = [start, vertical, end];
    const pointsAmount = 20;
    const curve = createBezierPoints(anchorPoints, pointsAmount);
    this.circles.push(mid);
    this.circles.push(vertical);
    this.circles.push(...curve);

    this.lines.push({ start: mid, end: vertical });
  },
};
</script>

<style>
.bg {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
}
</style>
