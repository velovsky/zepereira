<template>
  <div v-show="isVisible" class="frame" @click="goBack">
    <span v-show="!isLoaded" class="loader">
      <span class="loader-inner"></span>
    </span>
    <img v-show="isLoaded" :src="imageInfo" @load="isLoaded = true">
  </div>
</template>

<script>
export default {
  name: 'frame',
  props: {
    imageInfo: {
      type: String,
      default: undefined
    },
    returnComponent: {
      type: String,
      default: 'Home'
    }
  },
  data () {
    return {
      isLoaded: false
    }
  },
  computed: {
    isVisible () {
      // no image info
      if (!this.imageInfo) {
        return false
      }

      // if imagem then set it visible
      return true
    }
  },
  methods: {
    goBack: function () {
      this.isLoaded = false // reset
      this.$router.push({ name: this.returnComponent })
    }
  }
}
</script>

<style src="./Frame.scss" lang="scss" scoped></style>