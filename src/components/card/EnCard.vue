<template>
  <div class="card-container">
    <div class="card-header">
      <p class="card-title">{{ title }}</p>
      <i v-if="icon && !button" class="icon" :class="icon"></i>
      <en-button v-if="!icon && button" class="margin-element" type="secondary" small :title="button" />
    </div>
    <slot class="card-content"> </slot>
  </div>
</template>
<script lang="ts">
import EnButton from "../button/EnButton.vue";
export default {
  components: {EnButton},
  name: "EnCard",
  props: {
    title: String,
    icon: String,
    button: String,
  },
};
</script>
