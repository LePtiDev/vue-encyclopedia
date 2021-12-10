<template>
  <div :class="'slider-' + type">
    <p>{{ this.title }}</p>
    <input type="range" :step="this.step" />
    <p>{{ this.value }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "en-slider",
  props: {
    title: String,
    step: String,
    value: String,
    gradient: Array,
    type: {
      default: "primary",
    },
  },
};
</script>
<style lang="scss" scoped></style>
