import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/resume',
    component: () => import( '../views/resumeView.vue')
  },
  {
    path: '/testimonials',
    component: () => import( '../views/TestimonialsView.vue')
  },
  {
    path: '/projects',
    component: () => import( '../views/ProjectsView.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
