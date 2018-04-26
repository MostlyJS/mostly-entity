require = require("esm")(module/*, options*/);
module.exports = require('./src/entity').default;
module.exports.Dynamic = require('./src/dynamic').default;
module.exports.utils = require('./src/utils');
