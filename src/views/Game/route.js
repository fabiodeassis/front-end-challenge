export default [
  {
    path: '/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "game" */ './Game.vue')
  }
]
