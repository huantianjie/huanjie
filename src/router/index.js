import Vue from 'vue'
import VueRouter from 'vue-router'
import Community from '../views/Community.vue'
import ComPost from '../components/ComPost'
import HotEvents from '../components/HotEvents'
import Scoll from '../components/Scoll'
import HotTag from '../components/HotTag'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'community',
    component: Community
  },
  {
    path: '/scoll',
   
    component: Scoll
  },
  {
    path: '/hottag',
   
    component: HotTag
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
