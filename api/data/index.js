const auth = require('./auth');
const cardBrands = require('./card-brands');
let clients = require('./clients');
const clientStatus = require('./client-status');
const components = require('./components');
let transaction = require('./transaction');
const transactionStatus = require('./transaction-status');
const users = require('./users');
const status = require('./status');

module.exports = {
  auth,
  cardBrands,
  clients,
  clientStatus,
  components,
  status,
  transaction,
  transactionStatus,
  users
};