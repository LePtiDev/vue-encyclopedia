<template>
  <div>
    <ul class="nav nav-tabs">
      <div v-for="tab in tabs" :key="tab.title">
        <button :class="'margin-element tab-primary--' + type" :id="isActiveButton(tab.title, type)" @click.stop="setTab(tab)">
          <i v-if="tab.iconsLeft" class="icon-left" :id="isActiveIcon(tab.title, type)" :class="tab.iconsLeft"></i>
          {{ tab.title }}
          <i v-if="tab.iconsRight" class="icon-right" :id="isActiveIcon(tab.title, type)" :class="tab.iconsRight"></i>
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
      console.log('click fdp')
      this.$emit("selected", tab);
    },
    isActiveIcon(title, type) {
      console.log('icon', title);
      if (title === this.selected) return `active-icon-${type}`;
    },
    isActiveButton(title, type) {
      console.log('button', title, this.selected);
      if (title === this.selected) return `active-button-${type}`
    }
  },
};
</script>
