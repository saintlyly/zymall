import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/home/Home.vue'
import Home from '@/views/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/home',
      component: () => import('@/views/home/Home.vue')
    },
    {
      path: '/category',name: 'Category',
      component: () => import('@/views/category/Category.vue')
    },
    {
      path: '/cart',name: 'cart',
      component: () => import('@/views/cart/Cart.vue')
    },
    {
      path: '/profile',name: 'profile',
      component: () => import('@/views/profile/Profile.vue')
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
