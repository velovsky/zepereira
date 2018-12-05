import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/views/intro/Intro'
import Gallery from '@/views/gallery/Gallery'
import Contacts from '@/views/contacts/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/gallery/:pictureId?',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
