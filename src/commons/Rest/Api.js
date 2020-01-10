import Http from './Http'

/**
 * @type Api
 */
export default class Api extends Http {
  /**
   * @type {String}
   */
  static base = 'http://192.168.0.177:8080/api'

  /**
   * @param {String} path
   * @param {Object} options
   * @param {Object} http
   * @return {this}
   */
  static build (path = '', options = {}, http = null) {
    return new this(Api.normalize(Api.base, path), options, http)
  }
}
