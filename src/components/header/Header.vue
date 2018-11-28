<template>
  <div class="my-header">
    <div class="logo">
      <img src="@/assets/ze-logo.png" alt="">
    </div>
    <div class="links">
      <router-link
         class="link"
         tag="div"
         to="/">
        <div></div>
        <span>INTRO</span>
        <div></div>
      </router-link>
      <router-link
         class="link"
         tag="div"
         to="/gallery">
        <div></div>
        <span>GALLERY</span>
        <div></div>
      </router-link>
      <router-link
         class="link"
         tag="div"
         to="/contacts">
        <div></div>
        <span>CONTACTS</span>
        <div></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader'
}
</script>

<style src="./Header.scss" lang="scss" scoped></style>