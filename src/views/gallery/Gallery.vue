<template>
  <div class='gallery'>
    <div v-for='(image, index) in images' class="wrapper" :key='index'>
      <img :src='image'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  created: function () {
    // /API/listImages.php http://localhost:8181/temp
    fetch('/API/listImages.php', {method: 'get'})
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
  }
}
</script>

<style src='./gallery.scss' lang='scss' scoped></style>