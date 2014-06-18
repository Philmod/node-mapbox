/**
 * Module dependencies.
 */
var mapbox = require('../')
  , should = require('should')
  , assert = require('assert')
  ;

/**
 * Keys.
 */
var keys = require('../config/keys.js');

/**
 * Tests
 */
describe('node-mapbox', function() {

  it('should have a geocoding sub-library', function() {
    mapbox.should.have.property('geocoding');
  });

  describe('geocoding', function() {

    it('should respond with a city', function(done) {

      mapbox.geocoding.forward(keys.mapid, 'san francisco', function(e, res) {
        should.not.exist(e);
        res.should.have.property('query');
        res.should.have.property('attribution');
        res.should.have.property('results');
        done();
      });

    })

  })

});
