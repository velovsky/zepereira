<template>
  <div class="contacts">
    <loader v-show="!isLoaded"></loader>
    <div v-show="isLoaded">
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
    <img v-show="isLoaded" src="@/assets/gallery/16.png" @load="isLoaded = true">
  </div>
</template>

<script>
import loader from '@/components/loader/Loader'

export default {
  name: 'contacts',
  components: { loader },
  data () {
    return {
      isLoaded: false
    }
  }
}
</script>

<style src="./Contacts.scss" lang="scss" scoped></style>
