<template>
  <div class="login">
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

const service = LoginService.build()
export default {
  name: 'Login',
  components: {
    bldrUiBrand
  },
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      service
        .login(this.input)
        .then(this.loginSuccess)
    },
    loginSuccess (response) {
      localData.setAuth(true)
      localData.setAuthUser(response)
      if (response && response.firstName) {
        this.$emit('authenticated', true)
        this.$router.replace({ name: 'clients' })
      } else {
        console.log('The username and / or password is incorrect')
      }
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
