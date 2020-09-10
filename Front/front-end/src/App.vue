<template>
  <div id="app">
    <div class="menu">
      <app-menu></app-menu>
    </div>

    <app-home></app-home>
  </div>
</template>

<script>
import menu from "./components/menu.vue";
import home from "./components/Home.vue";
const regeneratorRuntime = require("regenerator-runtime");

export default {
  components: {
    appMenu: menu,
    appHome: home,
  },
};
</script>

<style>
.menu {
  margin-bottom: 5px;
  width: 100%;
}
</style>
