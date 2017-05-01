if (!global._babelPolyfill) { require('babel-polyfill'); }

module.exports = require('./lib/entity');
module.exports.Dynamic = require('./lib/dynamic');
