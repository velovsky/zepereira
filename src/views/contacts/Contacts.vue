<template>
  <div v-show="isLoaded" class="contacts">
    <div>
      <h1>Let's Talk!</h1>
      <div class="info">
        <p>Lisbon, Portugal</p>
        <p>
          +351 923 929 929
          <br>
          <a href="mailto:zepereira@thismail.com">
            zepereira@thismail.com
          </a>
        </p>
      </div>
    </div>
    <img src="@/assets/gallery/16.png" @load="isLoaded = true">
  </div>
</template>

<script>
export default {
  name: 'contacts',
  data () {
    return {
      isLoaded: false
    }
  }
}
</script>

<style src="./Contacts.scss" lang="scss" scoped></style>
