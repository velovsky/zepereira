<template>
  <div class='static/img'>
    <img v-for='(image, index) in images'
         :key='index'
         :src='image'>
  </div>
</template>

<script>
export default {
  name: 'static/img',
  created: () => {
    // return // TEMP (to be removed)

    // get images
    // const onSuccess = (data) => {
    //   if (!data) {
    //     return
    //   }
    //   this.imagesPathArr = data.map((el) => el)
    // }

    // fetch('/API/listImages.php', {method: 'get'})
    //   .then((response) => response.json())
    //   .then((data) => onSuccess(data))
    //   .catch((error) => console.error(error))
  },
  data () {
    return {
      images: ['@/assets/gallery/13669848_815891901878993_8531700867476755603_n.jpg',
        '../static/img/4.jpg', '../static/img/11.png',
        '../static/img/13.png', '../static/img/16.png',
        '../static/img/18.png', '../static/img/2.png',
        '../static/img/6.png', '../static/img/watercolorfaceweb.png',
        '../static/img/12.gif', '../static/img/3.gif',
        '../static/img/7.gif', '../static/img/inkweb.gif'], // TEMP
      imagesPathArr: []
    }
  }
}
</script>

<style src='./gallery.scss' lang='scss' scoped></style>