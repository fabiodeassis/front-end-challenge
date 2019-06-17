<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
import localData from '@/_services/LocalData'
import LoginService from './LoginServices'

const service = LoginService.build()
export default {
  name: 'Login',
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

<style scoped>
  #login {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
  }
</style>
