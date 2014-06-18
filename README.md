node-mapbox
===========

Nodejs SDK for mapbox

## Tests
First you have to add a mapid in the `config/keys.js` file in order to run the tests.

```
  $ npm test
```

## Usage
```
var mapbox = require('mapbox');
mapbox.geocoding.forward(keys.mapid, 'san francisco', function(e, res) {
  if (e) console.error(e);
  else console.log('results : ', res);
});
```

