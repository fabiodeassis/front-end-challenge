import ClientRoute from './Clients/route'
import LoginRoute from './Login/route'

import Home from './Home.vue'

const Defaults = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]
export default [].concat([], [...Defaults, ...ClientRoute, ...LoginRoute])
