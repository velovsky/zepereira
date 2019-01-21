<template>
  <div v-show="isLoaded" class="my-footer">
    <a target="_blank" :href="url">>
      <img :src="url + logo" alt="">
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'myFooter',
  data () {
    return {
      url: 'https://www.own-it.app/',
      logo: 'my-logo.png'
    }
  },
  computed: {
    ...mapGetters(['isLoaded'])
  }
}
</script>

<style src="./Footer.scss" lang="scss" scoped></style>
