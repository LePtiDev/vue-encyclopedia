<template>
  <div class="container-body">
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/app/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Nav
  }
}
</script>
<style lang="scss">
@import "@/app/scss/init.scss";
</style>
