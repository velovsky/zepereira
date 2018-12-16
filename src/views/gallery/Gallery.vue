<template>
  <div class='gallery'>
    <image-frame :image-info="selectedImage" :return-component="currentRoute"></image-frame>
    <loader v-show="!areImagesLoaded"></loader>
    <div v-for="(image, index) in images"
         v-show="areImagesLoaded"
         class="wrapper" 
         :key="index"
         @click="getPicture(index)">
      <img :src="image" @load="pictureIsLoaded()">
    </div>
    <div class="loader">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import imageFrame from '@/components/image-frame/Frame'
import loader from '@/components/loader/Loader'

export default {
  name: 'gallery',
  components: { imageFrame, loader },
  created: function () {
    // everytime the gallery is reloaded, reset image loader validator
    this.areImagesLoaded = false
    this.numImagesLoaded = 0

    // URL is defiend accordingly to each enviroment
    fetch(process.env.GALLERY_API_URL, {method: 'get'})
      .then((response) => {
        if (response.status !== 200 &&
              response.status !== 304) {
          return
        }
        return response.json()
      })
      .then((data) => {
        if (!data) {
          return
        }
        this.images = data.images.map((el) => el)

        // if particular picture is specified then select it
        if (this.$route.params.pictureId !== undefined) {
          this.selectedImage = this.images[this.$route.params.pictureId]
        }
      })
      .catch((error) => console.error(error))
  },
  data () {
    return {
      images: [],
      numImagesLoaded: 0,
      areImagesLoaded: false,
      selectedImage: undefined
    }
  },
  watch: {
    '$route' (to, from) {
      // no parameters in route or no images available
      if (to.params.pictureId === undefined || this.images.length === 0) {
        this.selectedImage = undefined
        return
      }

      // select the picture
      this.selectedImage = this.images[to.params.pictureId]
    }
  },
  computed: {
    currentRoute () {
      return this.$route.name
    }
  },
  methods: {
    pictureIsLoaded: function () {
      this.numImagesLoaded++

      // if all loaded set to true
      if (this.numImagesLoaded === this.images.length) {
        this.areImagesLoaded = true
      }
    },
    getPicture: function (index) {
      this.$router.push({ name: 'Gallery', params: { pictureId: index } })
    }
  }
}
</script>

<style src='./gallery.scss' lang='scss' scoped></style>