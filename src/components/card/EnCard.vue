<template>
  <div class="card-container">
    <div class="card-header">
      <p class="card-title">{{ title }}</p>
      <i v-if="icon" class="icon" :class="icon"></i>
    </div>
    <slot class="card-content"> </slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "EnCard",
  props: {
    title: String,
    icon: String,
  },
};
</script>
