<template>
  <div class="container-body">
    <div class="row">
      <en-tab-nav :tabs="[
          {title: 'Profile', iconsLeft: 'ti ti-plus'},
          {title: 'Users', iconsRight: 'ti ti-arrow-up'},
          {title: 'Subscription', iconsRight: 'ti ti-arrow-down', iconsLeft: 'ti ti-clock'},
          {title: 'Integrations'}
          ]" :selected="selected" @selected="setSelected" type="filled">
        <en-tab :isSelected="selected === 'Profile'">
          <p>{{ selected }} view</p>
        </en-tab>
        <en-tab :isSelected="selected === 'Users'">
          <p>{{ selected }} view</p>
        </en-tab>
        <en-tab :isSelected="selected === 'Subscription'">
          <p>{{ selected }} view</p>
        </en-tab>
        <en-tab :isSelected="selected === 'Integrations'">
          <p>{{ selected }} view</p>
        </en-tab>
      </en-tab-nav>
    </div>
    <div class="row">
      <en-tab-nav :tabs="[
          {title: 'label', iconsLeft: 'ti ti-settings'},
          {title: 'label2', iconsRight: 'ti ti-arrow-down'},
          {title: 'label3', iconsLeft: 'ti ti-dashboard', iconsRight: 'ti ti-clock'},
          {title: 'label4'}
          ]" :selected="selected" @selected="setSelected" type="underline">
        <en-tab :isSelected="selected === 'label'">
          <p>{{ selected }} view</p>
        </en-tab>
        <en-tab :isSelected="selected === 'label2'">
          <p>{{ selected }} view</p>
        </en-tab>
        <en-tab :isSelected="selected === 'label3'">
          <p>{{ selected }} view</p>
        </en-tab>
        <en-tab :isSelected="selected === 'label4'">
          <p>{{ selected }} view</p>
        </en-tab>
      </en-tab-nav>
    </div>
  </div>
</template>
<script>
import EnTab from '@/components/tabs/EnTab.vue';
import EnTabNav from '../components/tabs/EnTabNav.vue';
export default {
  name: 'Tabs',
  components: { EnTabNav, EnTab },
  data() {
    return {
      selected: 'Profile'
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab.title;
    }
  }
}
</script>
