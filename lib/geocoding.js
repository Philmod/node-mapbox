/**
 * Dependencies.
 */
var request = require('request');

/**
 * Config.
 */
var config = require('../config/index.js');

/**
 * Private methods.
 */
var stringifyQuery = function(str) {
  return str.replace(/\s/g, '+');
}

/**
 * Module.
 */
module.exports = {

  forward: function(mapid, query, callback) {

    var options = {
      url: config.baseUrl + mapid + config.geocodingPath + stringifyQuery(query) + '.json'
    };

    request(options, function(e, r, b) {
      if (e || r.statusCode !== 200)
        return callback(new Error(e || b));
      try {
        b = JSON.parse(b);
      } catch(e) {
        return callback(new Error('Cannot parse. ', e));
      }
      callback(null, b);
    });

  }

}
