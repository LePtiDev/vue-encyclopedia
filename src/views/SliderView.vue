<template>
  <div class="container-component">
    <h2>Sliders</h2>
    <en-slider class="margin-element-y" title="Temp" value="350" step="0" />
    <en-slider class="margin-element-y" title="Tint" value="+12" step="10" :gradient="['#facc15', '#2563eb']" type="secondary" />
    <en-slider class="margin-element-y" title="Exposure" value="+0.33" step="1" />
  </div>
</template>

<script>
import EnSlider from "@/components/slider/EnSlider.vue";

export default {
  name: "slider-view",
  components: {
    EnSlider,
  },
};
</script>
