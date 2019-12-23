export default {
  beforeExit: (_fn) => {
    if (_fn && typeof _fn === 'function') {
      _fn()
    }
    return new Date().getTime()
  },
  finish: (obj) => {
    console.log(obj)
  }
}
