import Rest from '@/commons/Rest'
import axios from 'axios'

/**
 * @typedef {LoginService}
 */
class LoginService extends Rest {
  /**
   * @type {String}
   */
  static resource = '/login'

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  login (record) {
    return this.create(record)
  }
}

class LoginAltService {
  login (record) {
    return axios.post('/api/login', record)
  }
}
export default LoginService
export {
  LoginService,
  LoginAltService
}
