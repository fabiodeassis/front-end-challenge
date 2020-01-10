import Rest from '@/commons/Rest'

/**
 * @typedef {AppService}
 */
export default class AppService extends Rest {
  /**
   * @type {String}
   */
  static resource = '/config'
}
