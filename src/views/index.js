import ClientRoute from './Clients/route'
import LoginRoute from './Login/route'

import Home from './Home.vue'

const Defaults = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './About.vue')
  }
]
export default [].concat([], [...Defaults, ...ClientRoute, ...LoginRoute])
