import Vue from 'vue'
import Router from 'vue-router'
import Routes from './views'
import localData from '@/_services/LocalData'

Vue.use(Router)
const appRouter = new Router({
  routes: Routes
})

appRouter.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (localData.getAuth()) {
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }
})

export default appRouter
