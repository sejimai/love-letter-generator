<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css";     /*深色主题*/
#app {
  background-image: './assets/picture/background_image.jpg';
  opacity: 0.7;
}
</style>
