<template>
  <div v-show="isLoaded" class="intro">
    <h1 class="title">
      hi, welcome to my space
    </h1>
    <div class="corpo">
      <img src="@/assets/gallery/watercolorfaceweb.png" @load="isLoaded = true">
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam tincidunt aliquam magna, sed egestas libero vulputate ut. 
        Fusce varius convallis elit, vitae porta ex fermentum quis. 
        Vivamus vehicula aliquam ante, in tristique mi ultricies quis. 
        Nam consectetur id velit sed feugiat. Mauris gravida posuere nisl, 
        et vulputate sapien cursus a. Ut ligula eros, mollis quis eleifend at, 
        imperdiet ut magna. Vestibulum eu metus ante. Quisque ac tincidunt sem. 
        Aliquam vulputate blandit lacus, et semper leo tempor vel. 
        Suspendisse non leo at justo consectetur gravida. Nunc suscipit, elit 
        vitae feugiat tincidunt, orci lectus auctor massa, 
        id tempus dolor metus eget purus. 
        Ut laoreet posuere magna ut ullamcorper. Cras auctor, sem vitae fermentum molestie, 
        lorem augue vehicula odio, at lobortis urna lorem et dolor. Donec tempus mi ligula, 
        id malesuada lectus porttitor ac.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
      isLoaded: false
    }
  }
}
</script>


<style src="./Intro.scss" lang="scss" scoped></style>
