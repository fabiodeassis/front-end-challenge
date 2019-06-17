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
import bldHeader from '@/components/Header/Header.vue'
import bldMain from '@/components/Main/Main.vue'
import localService from '@/_services/LocalData'
import AppService from './AppServices'
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
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
