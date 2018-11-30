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
  created: () => {
    fetch('/API/listImages.php', {method: 'get'})
      .then((response) => {
        if (response.status !== 200) {
          return
        }
        response.json()
      })
      .then((data) => {
        if (!data) {
          return
        }
        this.images = data.map((el) => el)
      })
      .catch((error) => console.error(error))
  },
  data () {
    return {
      // default
      images: ['http://zepereira.rf.gd/gallery/13669848_815891901878993_8531700867476755603_n.jpg',
        'http://zepereira.rf.gd/gallery/4.jpg', 'http://zepereira.rf.gd/gallery/11.png',
        'http://zepereira.rf.gd/gallery/13.png', 'http://zepereira.rf.gd/gallery/16.png',
        'http://zepereira.rf.gd/gallery/18.png', 'http://zepereira.rf.gd/gallery/2.png',
        'http://zepereira.rf.gd/gallery/6.png', 'http://zepereira.rf.gd/gallery/watercolorfaceweb.png',
        'http://zepereira.rf.gd/gallery/12.gif', 'http://zepereira.rf.gd/gallery/3.gif',
        'http://zepereira.rf.gd/gallery/7.gif', 'http://zepereira.rf.gd/gallery/inkweb.gif']
    }
  }
}
</script>

<style src='./gallery.scss' lang='scss' scoped></style>