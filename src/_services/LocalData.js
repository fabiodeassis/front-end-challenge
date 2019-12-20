export default {
  authenticated: false,
  config: {},
  user: null,
  skin: 'default',
  getAuth () {
    return this.authenticated
  },
  setAuth (status) {
    this.authenticated = status
  },
  getAuthUser () {
    return this.user
  },
  setAuthUser (user) {
    this.user = user
  },
  getConfig () {
    return this.config
  },
  setConfig (config) {
    console.log(config)
    this.config = config
  },
  getSkin () {
    return this.skin
  },
  setSkin (skin) {
    this.skin = skin
  }
}
