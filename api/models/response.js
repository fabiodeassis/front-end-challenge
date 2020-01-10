const message = require('./message');
module.exports = function (config) {
  return {
    message: message(config.message),
    data: config.data
  };
};
