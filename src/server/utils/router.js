const Promise = require('bluebird');
const delimiter = require('./fileRead.js');
const getDel = Promise.promisifyAll(delimiter);

module.exports = function(app) {
  app.get('/api/delimiters/:delimiter', getDel.getDelimitersAsync);
};
