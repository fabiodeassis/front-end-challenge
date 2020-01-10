<template>
  <div class="login"><button type="button" v-on:click="push()">Login</button>
    <bldrUiBrand model="full over-primary" />
    <rsv-banner
        :position="position"
      >
        This is a banner!
      </rsv-banner>
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

import { RsvBanner } from '@reserve/atomic-ui'

const { LocalNotifications, Toast } = Plugins
const service = LoginService.build()
export default {
  name: 'Login',
  components: {
    bldrUiBrand,
    RsvBanner
  },
  data () {
    return {
      input: {
        username: 'john@gmail.com',
        password: 'passwd'
      },
      position: 'top'
    }
  },
  methods: {
    async show (message) {
      await Toast.show({
        text: message
      })
    },
    login () {
      service
        .login(this.input)
        .then(this.loginSuccess)
        .catch(this.loginError)
    },
    loginSuccess (response) {
      const data = response.data
      localData.setAuth(true)
      localData.setAuthUser(data)
      if (data && data.firstName) {
        this.$emit('authenticated', true)
        this.$router.replace({ name: 'game' })
        this.show((response.message && response.message.text) || 'MSG.LOGIN_SUCCESS')
      } else {
        this.show('MSG.ERROR_AFTER_LOGIN')
      }
    },
    loginError (error) {
      console.log(error, error.response, error.message)
      this.show((error.message && error.message.text) || 'MSG.ERROR_LOGIN')
    },
    push () {
      this.show('MSG.SENDING_PUSH_NOTIFICATIONS')

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
