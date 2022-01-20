<template>
  <div class="container-body">
    <div class="row">
      <en-tab-nav :tabs="[{title: 'Profile', iconsLeft: 'ti ti-plus'}, {title: 'Users'}, {title: 'Subscription'}, {title: 'Integrations'}]" :selected="selected" @selected="setSelected" type="regular">
        <en-tab :isSelected="selected === 'Profile'">
          <p>Some test nike ta mere</p>
        </en-tab>
        <en-tab :isSelected="selected === 'Users'">
          <h1>More test text</h1>
        </en-tab>
        <en-tab :isSelected="selected === 'Subscription'">
          <ul>
            <li>List test 1</li>
          </ul>
        </en-tab>
        <en-tab :isSelected="selected === 'Integrations'" >
          <h1>text test again !</h1>
        </en-tab>
      </en-tab-nav>
    </div>
    <div class="row">
      <en-tab-nav :tabs="['label']" :selected="selected" @selected="setSelected" type="filled">
        <en-tab :isSelected="selected === 'label'"></en-tab>
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
      this.selected = tab;
    }
  }
}
</script>
