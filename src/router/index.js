// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import PortfolioSubSite from '../components/PortfolioSubSite.vue'
import ServicesSubSite from '@/components/ServicesSubSite.vue'
// import ContactSubSite from '@/components/ContactsSubSite.vue'
// import Contact from '../views/Contact.vue'

const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: PortfolioSubSite
//   },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioSubSite
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesSubSite
  },
  {
    // path: '/contact',
    // name: 'Contact',
    // component: ContactSubSite
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router