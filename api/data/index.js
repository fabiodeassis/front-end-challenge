const   auth =              require('./auth');
const   cardBrands =        require('./card-brands');
let     clients =           require('./clients');
const   clientStatus =      require('./client-status');
const   components =        require('./components');
let     transaction =       require('./transaction');
const   transactionStatus = require('./transaction-status');
const   users =             require('./users');

module.exports = {
    auth:               auth,
    cardBrands:         cardBrands,
    clients:            clients,
    clientStatus:       clientStatus,
    components:         components,
    transaction:        transaction,
    transactionStatus:  transactionStatus,
    users:              users
};