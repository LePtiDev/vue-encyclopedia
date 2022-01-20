<template>
  <div>
    <ul class="nav nav-tabs">
      <div v-for="tab in tabs" :key="tab">
        <button :class="'margin-element tab-primary--' + type" :id="{active: tab === selected}" @click="setTab(tab)">
          <i v-if="tab.iconsLeft" class="icon-left" :class="tab.iconsLeft"></i>
          {{ tab.title }}
        </button>
      </div>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "en-tab-nav",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    iconsLeft: String,
    selected: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: null,
    },
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>
