<template>
  <div id="app">
    <my-header></my-header>
    <main style="grid-area: body">
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

// * {
//   border: 1px solid red;
// }

@import url('https://fonts.googleapis.com/css?family=Dosis');
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');

body {
  font-family: 'Dosis', 'Open Sans Condensed', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  margin: 0px;
  width: 100%;
  height: 100%;
}

#app {
  display: grid;
  grid-template-rows: $page-header-height auto $footer-height;
  grid-template-areas: "header" "body" "footer";

  .my-header {
    grid-area: header;
  }

  main {
    grid-area: body;
    min-height: $page-min-height;
    justify-self: center;
  }

  .my-footer {
    grid-area: footer;
  }
}

</style>
