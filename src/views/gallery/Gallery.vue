<template>
  <div class='gallery'>
    <image-frame :image-info="selectedImage" :return-component="currentRoute"></image-frame>
    <div v-for="(image, index) in images"
         v-show="areImagesLoaded"
         class="wrapper" 
         :key="index"
         @click="getPicture(index)">
      <img :src="image" @load="pictureIsLoaded()">
    </div>
  </div>
</template>

<script>
import imageFrame from '@/components/image-frame/Frame'

export default {
  name: 'gallery',
  components: { imageFrame },
  created: function () {
    // everytime the gallery is reloaded, reset image loader validator
    this.areImagesLoaded = false
    this.numImagesLoaded = 0
    // /API/listImages.php http://localhost:8181/temp
    fetch('http://localhost:8181/temp', {method: 'get'})
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