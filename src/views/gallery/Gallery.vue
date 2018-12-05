<template>
  <div class='gallery'>
    <div class="picture-overlay"></div>
    <div v-for='(image, index) in images' class="wrapper" :key='index'>
      <img :src='image'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  created: function () {
    console.log('gallery')
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
      images: []
    }
  },
  watch: {
    '$route' (to, from) {
      if (!to.params.pictureId) {
        return
      }
      alert(to.params.pictureId)
    }
  }
}
</script>

<style src='./gallery.scss' lang='scss' scoped></style>