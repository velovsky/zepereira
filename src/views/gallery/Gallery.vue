<template>
  <div class='gallery'>
    <image-frame :image-info="selectedImage"></image-frame>
    <div v-for="(image, index) in images" 
         class="wrapper" 
         :key="index"
         @click="getPicture(index)">
      <img :src="image">
    </div>
  </div>
</template>

<script>
import imageFrame from '@/components/image-frame/Frame'

export default {
  name: 'gallery',
  components: { imageFrame },
  created: function () {
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
      selectedImage: undefined
    }
  },
  watch: {
    '$route' (to, from) {
      // no parameters in route or no images available
      if (!to.params.pictureId || this.images.length === 0) {
        this.selectedImage = undefined
        return
      }
      this.selectedImage = this.images[to.params.pictureId]
    }
  },
  methods: {
    getPicture: function (index) {
      window.location.href += '/' + index
    }
  }
}
</script>

<style src='./gallery.scss' lang='scss' scoped></style>