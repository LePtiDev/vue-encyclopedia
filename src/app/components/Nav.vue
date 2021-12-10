<template>
  <div class="nav-app">
    <div class="logo">logo</div>
    <h4>components</h4>
    <div class="list">
      <router-link :class="$route.name === 'button' ? 'selected' : ''" class="link" to="/button">Buttons</router-link>
      <router-link :class="$route.name === 'chips' ? 'selected' : ''" class="link" to="/chips">Chips</router-link>
      <router-link :class="$route.name === 'slider' ? 'selected' : ''" class="link" to="/slider">Sliders</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav",
};
</script>
