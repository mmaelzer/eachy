eachy
=====

A tiny (16 lines of code) serial async each implementation that supports CommonJS, AMD, and VanillaJS. The minified file `eachy.min.js` is just 270 bytes. 
  
[![build status](https://secure.travis-ci.org/mmaelzer/eachy.png)](http://travis-ci.org/mmaelzer/eachy)

Install
-------

```
npm install eachy
```

```
bower install eachy
```

Usage
-----

### asyncEach(array, iterator, callback)

#### Arguments
* `array` - An array to iterate over
* `iterator(item, callback, index)` - A function called for each `item` in the `array`. The `callback(err)` takes a single, optional argument, an error. The `index` value is index of the item in the array.
* `callback(err)` - The callback that is called when all `iterator` functions are finished or an error occurs.

Examples
--------
#### Browser (No module loader)
```html
<script src="/js/eachy.js"></script>
<script>
  // asyncEach is a global bound to the window object now
  asyncEach(['hi', 'i love', 'alerts'], function(word, done) {
    alert(word);
    done();
  });
</script>
```

#### Node.js
```javascript
var asyncEach = require('eachy');
var fs = require('fs');

asyncEach(['robots.txt', 'todo.txt'], function(file, done) {
  fs.readFile(file, function(err, data) {
    if (err) return done(err);
    console.log(data);
    done();
  });
}, function(err) {
  console.log('You should have all the information you need now.');
});
```
