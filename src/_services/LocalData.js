export default {
  authenticated: false,
  config: {},
  user: null,
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
    this.config = config
  }
}
