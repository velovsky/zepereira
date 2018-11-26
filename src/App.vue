<template>
  <div id="app">
    <my-header></my-header>
    <main style="grid-area: body">
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/header/Header.vue'
import myFooter from '@/components/footer/Footer.vue'

export default {
  name: 'app',
  components: { myHeader, myFooter }
}
</script>

<style lang="scss">

* {
  border: 1px solid red;
}

body {
  box-sizing: border-box;
  margin: 0px;
  width: 100%;
  height: 100%;
}

#app {
  display: grid;
  grid-template-rows: 100px auto 1fr; //TODO: Global variables
  grid-template-areas: "header" "body" "footer";

  .my-header {
    grid-area: header;
  }

  main {
    grid-area: body;
    min-height: calc(100vh - (#{$header-height} + #{$header-padding} * 2) - #{$footer-height});
  }

  .my-footer {
    grid-area: footer;
  }
}

</style>
