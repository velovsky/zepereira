<template>
  <div class="page-not-found">
    PAGE NOT FOUND
  </div>
</template>

<script>
export default {
  created: function () {
    this.$store.commit('updateLoadedState', false)
  }
}
</script>


<style lang="scss" scoped>
.page-not-found {
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
  font-size: 9vw;
}
</style>
