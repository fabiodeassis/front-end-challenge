import Rest from '@/_services/Rest'

/**
 * @typedef {ClientsService}
 */
export default class ClientsService extends Rest {
  /**
   * @type {String}
   */
  static resource = '/clients'
}
