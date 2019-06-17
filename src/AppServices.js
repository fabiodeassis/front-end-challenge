import Rest from '@/_services/Rest'

/**
 * @typedef {AppService}
 */
export default class AppService extends Rest {
  /**
   * @type {String}
   */
  static resource = '/config'
}
