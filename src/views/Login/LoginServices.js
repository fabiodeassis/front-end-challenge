import Rest from '@/_services/Rest'

/**
 * @typedef {LoginService}
 */
export default class LoginService extends Rest {
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
