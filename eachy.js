(function(global) {
  function eachy(items, iterator, callback) {
    var index = 0;
    (function next(err) {
      if (err || index === items.length) return (callback || function(){})(err);
      iterator(items[index], next, index++);
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
