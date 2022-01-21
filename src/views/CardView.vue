<template>
  <div class="container-component">
    <h2>Card</h2>

    <div class="card-view-background">
      <div class="row">
        <en-card class="margin-element" title="Card Title" icon="ti ti-dots-vertical">
          <template v-slot>
            <div class="card-placeholder"></div>
          </template>
        </en-card>

        <en-card class="margin-element" title="Card Title">
          <template v-slot>
            <div class="card-placeholder"></div>
          </template>
        </en-card>

        <en-card class="margin-element" title="Card Title">
          <template v-slot>
            <div class="card-placeholder"></div>
          </template>
        </en-card>
      </div>
      <div class="row">
        <en-card class="margin-element" title="Card Title">
          <template v-slot>
            <div class="card-placeholder"></div>
          </template>
        </en-card>

        <en-card class="margin-element" title="Card Title">
          <template v-slot>
            <div class="card-placeholder"></div>
          </template>
        </en-card>

        <en-card class="margin-element" title="Card Title">
          <template v-slot>
            <div class="card-placeholder"></div>
          </template>
        </en-card>
      </div>
      <div class="row">
        <en-card class="margin-element" title="Card Title">
          <template v-slot>
            <div class="card-placeholder"></div>
          </template>
        </en-card>

        <en-card class="margin-element" title="Card Title">
          <template v-slot>
            <div class="card-placeholder"></div>
          </template>
        </en-card>

        <en-card class="margin-element" title="Card Title">
          <template v-slot>
            <div class="card-placeholder"></div>
          </template>
        </en-card>
      </div>
    </div>
  </div>
</template>

<script>
import EnCard from "@/components/card/EnCard.vue";

export default {
  name: "button-view",
  components: {
    EnCard,
  },
};
</script>
