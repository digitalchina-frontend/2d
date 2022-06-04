<template>
  <circle
    :cx="point.x"
    :cy="point.y"
    r="2"
    stroke="red"
    stroke-width="2"
    fill="black"
  />
</template>

<script>
export default {
  props: {
    point: {
      type: Object,
      default: () => ({
        x: 0,
        y: 0,
      }),
    },
  },
};
</script>

<style></style>
