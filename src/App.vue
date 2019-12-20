<template>
  <div id="app">
    <bldHeader v-bind:authenticated="authenticated">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/clients">Clients</router-link> |
        <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
      </div>
    </bldHeader>

    <bldMain v-bind:authenticated="authenticated">
      <router-view @authenticated="setAuthenticated" />
    </bldMain>
  </div>
</template>

<script>
import { Plugins } from '@capacitor/core'
import bldHeader from '@/components/Header/Header.vue'
import bldMain from '@/components/Main/Main.vue'
import localService from '@/_services/LocalData'
import AppService from './AppServices'

const { App, BackgroundTask, LocalNotifications } = Plugins
const config = AppService.build()

export default {
  name: 'app',
  components: {
    bldHeader,
    bldMain
  },
  data () {
    return {
      authenticated: localService.getAuth()
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
    this.getConfig()

    App.addListener('appStateChange', (state) => {
      if (!state.isActive) {
        // The app has become inactive. We should check if we have some work left to do, and, if so,
        // execute a background task that will allow us to finish that work before the OS
        // suspends or terminates our app:

        let taskId = BackgroundTask.beforeExit(async () => {
          // In this function We might finish an upload, let a network request
          // finish, persist some data, or perform some other task

          // Example of long task
          console.log('INIT BACKGORUND TASK')
          var start = new Date().getTime()
          for (var i = 0; i < 1e18; i++) {
            if ((new Date().getTime() - start) > 20000) {
              this.callNotification()
              break
            }
          }
          // Must call in order to end our task otherwise
          // we risk our app being terminated, and possibly
          // being labeled as impacting battery life
          BackgroundTask.finish({
            taskId
          })
        })
      }
    })
  },
  methods: {
    setAuthenticated (status) {
      localService.setAuth(status)
      this.authenticated = status
    },
    logout () {
      localService.setAuth(status)
      this.authenticated = false
    },
    getConfig () {
      config
        .list()
        .then(this.getConfigSuccess)
    },
    getConfigSuccess (response) {
      localService.setConfig(response)
    },
    callNotification () {
      LocalNotifications.schedule({
        notifications: [
          {
            title: 'Novo Título de Notificação',
            body: 'Excelente trabalho na área de alpinismo industrial. Fiz um trabalho com eles e gostei do atendimento e finalização',
            id: 1,
            schedule: { at: new Date(Date.now() + 1000 * 5) },
            sound: null,
            attachments: null,
            actionTypeId: '',
            extra: null
          },
          {
            title: 'Get 10% off!',
            body: 'Swipe now to learn more',
            // Android-only: set a custom statusbar icon
            // Get random id to test cancel
            id: Math.floor(Math.random() * 10),
            sound: 'beep.aiff',
            attachments: [
              { id: 'face', url: 'http://192.168.0.177/site/assets/image/costabrava.jpg' }
            ],
            actionTypeId: 'OPEN_PRODUCT',
            extra: {
              productId: 'PRODUCT-1'
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss">
/*#app {
  background: #fff;
}*/
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: var(--secondary-darth);
    &.router-link-exact-active {
      color: var(--secondary-avid);
    }
  }
}
</style>
