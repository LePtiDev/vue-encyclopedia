<template>
  <div class="container-component">
    <h2>Buttons</h2>
    <h3>Regular</h3>
    <div class="row">
      <en-button class="margin-element" type="primary" title="Primary" />
      <en-button class="margin-element" type="primary" title="Primary" iconsLeft="ti ti-plus" />
      <en-button class="margin-element" type="primary" title="Primary" iconsRight="ti ti-chevron-down" />
      <en-button type="primary-icon" icon="ti ti-dots-vertical" />
    </div>
    <div class="row">
      <en-button class="margin-element" type="secondary" title="Secondary" />
      <en-button class="margin-element" type="secondary" title="Secondary" iconsLeft="ti ti-plus" />
      <en-button class="margin-element" type="secondary" title="Secondary" iconsRight="ti ti-chevron-down" />
      <en-button type="secondary-icon" icon="ti ti-dots-vertical" />
    </div>
    <div class="row">
      <en-button class="margin-element" type="terciary" title="Terciary" />
      <en-button class="margin-element" type="terciary" title="Terciary" iconsLeft="ti ti-plus" />
      <en-button class="margin-element" type="terciary" title="Terciary" iconsRight="ti ti-chevron-down" />
      <en-button type="terciary-icon" icon="ti ti-dots-vertical" />
    </div>
    <h3>Small</h3>
    <div class="row">
      <en-button class="margin-element" type="primary" small title="Primary" />
      <en-button class="margin-element" type="primary" small title="Primary" iconsLeft="ti ti-plus" />
      <en-button class="margin-element" type="primary" title="Primary" small iconsRight="ti ti-chevron-down" />
      <en-button type="primary-icon" small icon="ti ti-dots-vertical" />
    </div>
    <div class="row">
      <en-button class="margin-element" type="secondary" small title="Secondary" />
      <en-button class="margin-element" type="secondary" small title="Secondary" iconsLeft="ti ti-plus" />
      <en-button class="margin-element" type="secondary" title="Secondary" small iconsRight="ti ti-chevron-down" />
      <en-button type="secondary-icon" icon="ti ti-dots-vertical" />
    </div>
    <div class="row">
      <en-button class="margin-element" type="terciary" small title="Terciary" />
      <en-button class="margin-element" type="terciary" small title="Terciary" iconsLeft="ti ti-plus" />
      <en-button class="margin-element" type="terciary" title="Terciary" small iconsRight="ti ti-chevron-down" />
      <en-button type="terciary-icon" icon="ti ti-dots-vertical" />
    </div>
  </div>
</template>

<script>
import EnButton from "@/components/actions/EnButton.vue";

export default {
  name: "button-view",
  components: {
    EnButton,
  },
};
</script>
