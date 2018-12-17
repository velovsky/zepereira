<template>
  <div class="contacts">
    <loader v-show="!isLoaded"></loader>
    <div v-show="isLoaded">
      <h1>Let's Talk!</h1>
      <div class="info">
        <p>Lisbon, Portugal</p>
        <p>
          +351 935 896 668
          <br>
          <a href="mailto:zezerpereira@gmail.com">
            zezerpereira@gmail.com
          </a>
        </p>
        <links></links>
      </div>
    </div>
    <img v-show="isLoaded" src="@/assets/contacts.png" @load="isLoaded = true">
  </div>
</template>

<script>
import loader from '@/components/loader/Loader'
import links from '@/components/social-links/Links'

export default {
  name: 'contacts',
  components: { loader, links },
  data () {
    return {
      isLoaded: false
    }
  }
}
</script>

<style src="./Contacts.scss" lang="scss" scoped></style>
