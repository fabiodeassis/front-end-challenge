import standard from './Standard'
import Service from './Service'

/**
 * @typedef {Http}
 */
export default class Http extends Service {
  /**
   * @param {String} path
   * @param {Object} options
   * @param {Object} http
   */
  constructor (path, options = {}, http = null) {
    super(options)
    this.path = path
    this.http = http || standard
  }

  /**
   * @param {String} path
   * @param {Object} options
   */
  static build (path, options) {
    return new this(path, options)
  }

  /**
   * @param {String} url
   * @returns {*|Promise<any>}
   */
  get (url) {
    return this.http
      .get(this.constructor.normalize(this.path, url))
  }

  /**
   * @param {String} url
   * @param {Object} data
   * @returns {*|Promise<any>}
   */
  post (url, data) {
    return this.http
      .post(this.constructor.normalize(this.path, url), data)
  }

  /**
   * @param {String} url
   * @param {Object} data
   * @returns {*|Promise<any>}
   */
  put (url, data) {
    return this.http
      .put(this.constructor.normalize(this.path, url), data)
  }

  /**
   * @param {String} url
   * @param {Object} data
   * @returns {*|Promise<any>}
   */
  patch (url, data) {
    return this.http
      .patch(this.constructor.normalize(this.path, url), data)
  }

  /**
   * @param {String} url
   * @returns {*|Promise<any>}
   */
  delete (url) {
    return this.http
      .delete(this.constructor.normalize(this.path, url))
  }

  /**
   * @param {String} start
   * @param {String} end
   * @returns {String}
   */
  static normalize (start, end) {
    return `${start}/${end}`.replace(/([^:]\/)\/+/g, '$1')
  }
}
