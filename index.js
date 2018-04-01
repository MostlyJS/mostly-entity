require = require("esm")(module/*, options*/);
console.time('mostly-entity import');
module.exports = require('./src/entity').default;
module.exports.Dynamic = require('./src/dynamic').default;
module.exports.utils = require('./src/utils');
console.timeEnd('mostly-entity import');
