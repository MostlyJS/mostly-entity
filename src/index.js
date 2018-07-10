const Entity = require('./entity');
const Dynamic = require('./dynamic');
const utils = require('./utils');

module.exports = Object.assign(Entity, utils);
module.exports.Dynamic = Dynamic;