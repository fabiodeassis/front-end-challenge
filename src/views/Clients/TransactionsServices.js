import Rest from '@/_services/Rest'

/**
 * @typedef {TransactionsService}
 */
export default class TransactionsService extends Rest {
  /**
   * @type {String}
   */
  static resource = '/clients/{id}/transactions'

  /**
   * @return {this}
   */
  static build (params = {}) {
    return new this(this.resource.replace(
      /{(\w*)}/g,
      function (m, key) {
        return params.hasOwnProperty(key) ? params[key] : ''
      }
    ))
  }

  all () {
    console.log(this)
    return this.list()
  }
}
