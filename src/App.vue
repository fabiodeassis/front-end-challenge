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
import { StatusService } from '@/commons/Status'
// import BackgroundTaskWeb from './../MyPlugins/TestPlugin'

import { StorageAPI } from '@/commons/Sql'

const { BackgroundTask, Device, LocalNotifications } = Plugins // const { App, BackgroundTask, Device, LocalNotifications } = Plugins
const config = AppService.build()
const status = StatusService.build()
const storage = StorageAPI

export default {
  name: 'app',
  components: {
    bldHeader,
    bldMain
  },
  data () {
    return {
      authenticated: localService.getAuth(),
      taskId: null,
      device: null
    }
  },
  // LifeCycle
  async beforeCreate () {
    console.log('1. beforeCreate')
    /**
     * TODO
     * 1. Verificar Device Info
     * 2. Setar Device info no Storage
     */
    this.device = await Device.getInfo()
    console.log('Device COnfig: ', this.device)

    status.list()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  },
  async created () {
    console.log('2. created')
    /**
     * TODO
     * 1. Solicitar configuraçãoes baseadas no Device info e no ClientAppInfo
     * 2. Setar/Atualizar Configurações no Storage
     */
    this.getConfig()
    console.log('created device info: ', this.device)
  },
  beforeMount () {
    console.log('3. beforeMount')
    console.log(this.device)
  },
  async mounted () {
    console.log('4. mounted')
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }

    await this.testPluginWithWrapper()

    // this.getConfig()
    /*
    const device = await this.getDeviceInfo()
    App.addListener('appStateChange', (state) => {
      if (!state.isActive) {
        // The app has become inactive. We should check if we have some work left to do, and, if so,
        // execute a background task that will allow us to finish that work before the OS
        // suspends or terminates our app:
        console.log(device)
        if (device.platform === 'web') {
          BackgroundTaskWeb.beforeExit(this.beforeExit)
        } else {
          this.taskId = BackgroundTask.beforeExit(this.beforeExit)
        }
      }
    })
    */
  },
  beforeUpdate () {
    console.log('5. beforeUpdate')
  },
  updated () {
    console.log('6. updated')
  },
  beforeDestroy () {
    console.log('7. beforeDestroy')
  },
  destroyed () {
    console.log('8. updated')
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
    async getDeviceInfo () {
      return Device.getInfo()
    },
    async beforeExit () {
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
        taskId: this.taskId
      })
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
    },

    async testPluginWithWrapper () {
      let ret1 = false
      let ret2 = false
      let ret3 = false
      let ret4 = false
      let ret5 = false
      let ret6 = false
      console.log(storage)
      let result = await storage.openStore({})

      if (result) {
        await storage.clear()
        await storage.setItem('key-test', 'This is a test')

        let value = await storage.getItem('key-test')

        if (value === 'This is a test') ret1 = true

        let keys = await storage.getAllKeys()

        if (keys[0] === 'key-test') ret2 = true

        await storage.removeItem('key-test')
        keys = await storage.getAllKeys()

        if (keys.length === 0) ret3 = true

        result = await storage.openStore({ database: 'testStore', table: 'table1' })

        if (result) {
          await storage.clear()
          await storage.setItem('key1-test', 'This is a new store')
          value = await storage.getItem('key1-test')

          if (value === 'This is a new store') ret4 = true

          let statusTable = await storage.setTable({ table: 'table2' })

          if (statusTable[0]) ret5 = true

          await storage.clear()
          await storage.setItem('key2-test', 'This is a second table')

          value = await storage.getItem('key2-test')

          if (value === 'This is a second table') ret6 = true
        }
      }
      if (ret1 && ret2 && ret3 && ret4 && ret5 && ret6) {
        console.log('testPlugin2 is successful')
      }
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
