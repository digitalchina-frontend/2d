<template>
  <line
    :x1="start.x"
    :y1="start.y"
    :x2="end.x"
    :y2="end.y"
    style="stroke: rgb(255, 0, 0); strokewidth: 2"
  />
</template>

<script>
export default {
  props: {
    start: {
      type: Object,
      default: () => ({
        x: 0,
        y: 0,
      }),
    },
    end: {
      type: Object,
      default: () => ({
        x: 200,
        y: 200,
      }),
    },
  },
};
</script>

<style></style>
