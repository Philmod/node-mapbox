/**
 * Module dependencies.
 */
var mapbox = require('../')
  , should = require('should')
  , assert = require('assert')
  ;

/**
 * Tests
 */
describe('node-mapbox', function() {

  it('should have a geocoding sub-library', function() {
    mapbox.should.have.property('geocoding');
  });

});
