import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/coach',
      name: 'coach',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CoachView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  console.log('before')
  // ...
  // explicitly return false to cancel the navigation
  return
})

export default router
