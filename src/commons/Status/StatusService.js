import Rest from '@/commons/Rest'

/**
 * @typedef {AppService}
 */
export default class StatusService extends Rest {
  /**
   * @type {String}
   */
  static resource = '/status'
}
