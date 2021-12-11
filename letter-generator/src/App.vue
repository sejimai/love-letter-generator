<template>
  <div id="app">
    <div id="canvas">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css"; /*深色主题*/
#app {
  background-image: url(./assets/picture/background_image.jpg);
}
#canvas {
  opacity: 0.7;
}
</style>
