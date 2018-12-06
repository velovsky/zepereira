<template>
  <div v-show="isVisible" class="frame" @click="goBack">
    <img :src="imageInfo" alt="">
  </div>
</template>

<script>
export default {
  name: 'frame',
  props: {
    imageInfo: String,
    default: undefined
  },
  computed: {
    isVisible () {
      if (!this.imageInfo) {
        return false
      }
      return true
    }
  },
  methods: {
    goBack: function () {
      this.$router.push({ name: 'Gallery' })
    }
  }
}
</script>

<style src="./Frame.scss" lang="scss" scoped></style>