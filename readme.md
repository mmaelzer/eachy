eachy
=====

A tiny (19 lines of code) serial async each/map implementation that supports CommonJS, AMD, and VanillaJS. The minified file `eachy.min.js` is just 303 bytes. 
  
[![build status](https://secure.travis-ci.org/mmaelzer/eachy.png)](http://travis-ci.org/mmaelzer/eachy)

Install
-------

#### npm
```
npm install eachy
```

#### bower
```
bower install eachy
```

Usage
-----

### seriesEach(array, iterator, callback)

#### Arguments
* `array` - An array to iterate over
* `iterator(item, callback, index)` - A function called for each `item` in the `array`. The `callback(err, value)` optionally takes an error or data. Data is collected and provided when all iterator functions have finished. The `index` value is the index of the item in the array.
* `callback(err, values)` - The callback that is called when all `iterator` functions are finished or an error occurs. The `values` argument is an array of values collected from iterator functions. The index of the value in values maps to the index of the item provided to the iterator function.

Examples
--------
#### Browser (No module loader)
```html
<script src="/js/eachy.js"></script>
<script>
  // seriesEach is a global bound to the window object now
  seriesEach(['hi', 'i love', 'alerts'], function(word, done) {
    alert(word);
    done();
  });
</script>
```

#### Node.js
```javascript
var seriesEach = require('eachy');
var fs = require('fs');

seriesEach(['robots.txt', 'todo.txt'], fs.readFile, function(err, files) {
  files.forEach(function(file) {
    console.log(file);
  });
  console.log('You should have all the information you need now.');
});
```

The MIT License
===============

Copyright (c) 2015 Michael Maelzer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
