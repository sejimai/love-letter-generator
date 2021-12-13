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
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url(./assets/picture/background_image.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#canvas {
  background: rgba(255, 255, 255, 0.5);
}
</style>
