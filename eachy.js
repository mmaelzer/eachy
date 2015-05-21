(function(global) {
  function eachy(items, iterator, callback) {
    callback = callback || function(){};
    var index = 0;
    (function next(err) {
      if (err) return callback(err);
      if (index === items.length) return callback();
      iterator(items[index], function(err) { next(err); }, index++);
    })();
  }
  if (typeof define !== 'undefined' && define.amd) {
    define(function() { return eachy; });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = eachy;
  } else {
    global.asyncEach = eachy;
  }
})(this);
