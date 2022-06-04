<template>
  <circle :cx="x" :cy="y" r="2" stroke="red" stroke-width="2" fill="black" />
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>
