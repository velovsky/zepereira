<template>
  <div class="intro">
    <loader v-show="!isLoaded"></loader>
    <div v-show="isLoaded">
      <h1 class="title">
        hi, welcome to my space
      </h1>
      <div class="corpo">
        <img src="@/assets/intro.png" @load="isLoaded = true">
        <div>
          <p>
            <span>Zé Pereira</span> began his career as a freelance illustrator 
            while in highschool back in his hometown, Funchal. 
            In the beginning, drawing was not a big part of his future, 
            but eventually caved in and gave up on his other goals to 
            fully dedicate himself to illustration, changing universities
            to study Drawing in Lisbon, Portugal. Later on, took a Graphic 
            Design course, studying at Flag (Lisbon).
          </p>
          <br>
          <p>
            Now, most of his clients are musicians, blogs, magazines, 
            museums and illustrations for documentaries. His work is a 
            mix between traditional and digital drawing techniques.
          </p>
        </div>
      </div>
      <links></links>
    </div>
  </div>
</template>

<script>
import loader from '@/components/loader/Loader'
import links from '@/components/social-links/Links'

export default {
  name: 'intro',
  components: { loader, links },
  created: function () {
    this.$store.commit('updateLoadedState', false)
  },
  data () {
    return {
      isLoaded: false
    }
  },
  watch: {
    isLoaded: function (val) {
      this.$store.commit('updateLoadedState', val)
    }
  }
}
</script>


<style src="./Intro.scss" lang="scss" scoped></style>
