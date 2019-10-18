<template>
  <div class="login"><button type="button" v-on:click="push()">Login</button>
    <bldrUiBrand model="full over-primary" />
    <div class="rounded-box">
      <h2 class="page-title">Login</h2>
      <input type="text" name="username" v-model="input.username" placeholder="Username" />
      <input type="password" name="password" v-model="input.password" placeholder="Password" />
      <button type="button" v-on:click="login()">Login</button>
    </div>
  </div>
</template>

<script>
import bldrUiBrand from '@/ui-lib/Brand/Brand.vue'
import localData from '@/_services/LocalData'
import LoginService from './LoginServices'

import { Plugins } from '@capacitor/core'

const { LocalNotifications } = Plugins
const service = LoginService.build()
export default {
  name: 'Login',
  components: {
    bldrUiBrand
  },
  data () {
    return {
      input: {
        username: 'john@gmail.com',
        password: 'passwd'
      }
    }
  },
  methods: {
    login () {
      service
        .login(this.input)
        .then(this.loginSuccess, this.loginError)
    },
    loginSuccess (response) {
      console.log(response)
      localData.setAuth(true)
      localData.setAuthUser(response)
      if (response && response.firstName) {
        this.$emit('authenticated', true)
        this.$router.replace({ name: 'clients' })
      } else {
        console.log('The username and / or password is incorrect')
      }
    },
    loginError (response) {
      console.log(response)
    },
    push () {
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

<style lang="scss" scoped>
.login {
  margin: 9em auto 4em;
  max-width: 338px;
  text-align: center;
  width: 90%;
  .brand-logo {
    margin: 0 0 4em;
  }
  .page-title {
    font-size: 1em;
  }
}
</style>
