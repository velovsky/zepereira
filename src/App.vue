<template>
  <div id="app">
    <my-header></my-header>
    <div ref="body" class="my-body">
      <main>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </main>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/header/Header.vue'
import myFooter from '@/components/footer/Footer.vue'

export default {
  name: 'app',
  components: { myHeader, myFooter },
  created: function () {
    // init route index
    this.routeIdx = this.getCurrRouteIdx(this.$router.history.current)
  },
  mounted: function () {
    // init touch event handler
    this.$refs.body.ontouchstart = this.touchstartHandler
    this.$refs.body.ontouchend = this.touchendHandler
  },
  data () {
    return {
      routeIdx: null,
      touch: {
        startX: undefined,
        startY: undefined,
        dist: undefined,
        thresholdX: 100, // required min horizontal distance traveled to be considered swipe
        thresholdY: 50, // required min vertical distance traveled to be considered swipe
        allowedTime: 500, // maximum time allowed to travel that distance
        elapsedTime: undefined,
        startTime: undefined
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.routeIdx = this.getCurrRouteIdx(to)
    }
  },
  methods: {
    getCurrRouteIdx: function (currRoute) {
      let allRoutes = this.$router.options.routes
      return allRoutes.findIndex((element) => {
        return element.name === currRoute.name
      })
    },
    switchRoute: function (hasSwipedRight) {
      let newIdx = hasSwipedRight ? this.routeIdx - 1 : this.routeIdx + 1
      let allRoutes = this.$router.options.routes
      let nextRoute = allRoutes[newIdx]

      // no route
      if (!nextRoute) {
        return // do nothing
      }

      // go to next route
      this.$router.push({ name: nextRoute.name })
    },
    touchstartHandler: function (event) {
      const touch = this.touch
      let touchobj = event.changedTouches[0]
      touch.dist = 0
      touch.startX = touchobj.pageX
      touch.startY = touchobj.pageY
      touch.startTime = new Date().getTime() // record time when finger first makes contact with surface
    },
    touchendHandler: function (event) {
      const touch = this.touch
      let touchobj = event.changedTouches[0]
      touch.dist = touchobj.pageX - touch.startX
      touch.elapsedTime = new Date().getTime() - touch.startTime

      // rules: if swiping/scrolling up/down ignore
      if (Math.abs(touchobj.pageY - touch.startY) > touch.thresholdY) {
        return
      }

      // if no horizontal distance (no swipe) ignore
      if (Math.abs(touch.dist) < touch.thresholdX) {
        return
      }

      // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
      let swipedRight = (touch.elapsedTime <= touch.allowedTime && touch.dist >= touch.thresholdX && Math.abs(touchobj.pageY - touch.startY) <= touch.thresholdY)
      this.switchRoute(swipedRight)
    }
  }
}
</script>

<style lang="scss">

// * {
//   border: 1px solid red;
// }

body {
  font-family: 'Dosis', 'Open Sans Condensed', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  margin: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  display: grid;
  grid-template-rows: $page-header-height $page-height;
  grid-template-areas: "header" "body";

  .my-header {
    grid-area: header;
    z-index: $header-z;
  }

  .my-body {
    grid-area: body;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: $page-height;
    overflow: auto;
  } 
}

// transitions FX
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
