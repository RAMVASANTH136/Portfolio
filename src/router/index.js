import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/About/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
]

const router = new VueRouter({
  routes
})

export default router
