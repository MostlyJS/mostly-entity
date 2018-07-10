const _ = require('lodash');
const validator = require('validator');

const DEFAULT_DATE = new Date('1900-01-01').toISOString();
function ISODate (name) {
  return function (obj) {
    var datetime = _.get(obj, name);
    if (datetime) {
      if (datetime instanceof Date) {
        return datetime.toISOString();
      } else {
        try {
          datetime = new Date(datetime).toISOString();
          return datetime;
        } catch (e) {
          return DEFAULT_DATE;
        }
      }
    }
    return DEFAULT_DATE;
  };
}

function isPresent (name) {
  return function (obj) {
    return _.has(obj, name);
  };
}

function isObject (name) {
  return function (obj) {
    return _.isArray(obj[name]) || _.isObject(obj[name]);
    //return _.isArrayLikeObject(obj[name]);
  };
}

function isPopulated (name) {
  return function (obj) {
    if (_.isArray(obj[name])) {
      return _.reduce(obj[name], (result, val) => {
        return result && !validator.isMongoId(val.toString());
      }, true);
    } else {
      if (obj[name]) {
        return !validator.isMongoId(obj[name].toString());
      } else {
        return false;
      }
    }
  };
}

module.exports = {
  ISODate,
  isPresent,
  isObject,
  isPopulated
};