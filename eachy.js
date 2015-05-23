(function(global) {
  function eachy(items, iterator, callback) {
    var index = 0, results = [];
    (function next(err) {
      if (err || index === items.length) return (callback || function(){})(err, results);
      iterator(items[index], function(err, result) {
        results[index++] = result;
        next(err);
      }, index);
    })();
  }
  if (typeof define !== 'undefined' && define.amd) {
    define(function() { return eachy; });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = eachy;
  } else {
    global.seriesEach= eachy;
  }
})(this);
