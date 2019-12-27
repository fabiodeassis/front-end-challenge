import ClientRoute from './Clients/route'
import LoginRoute from './Login/route'
import GameRoute from './Game/route'

const Home = () => import('./Home.vue')

const Defaults = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]
export default [].concat([], [...Defaults, ...ClientRoute, ...LoginRoute, ...GameRoute])
