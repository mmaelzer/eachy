
// instrument by jscoverage, do not modifly this file
(function (file, lines, conds, source) {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (BASE._$jscoverage) {
    BASE._$jscmd(file, 'init', lines, conds, source);
    return;
  }
  var cov = {};
  /**
   * jsc(file, 'init', lines, condtions)
   * jsc(file, 'line', lineNum)
   * jsc(file, 'cond', lineNum, expr, start, offset)
   */
  function jscmd(file, type, line, express, start, offset) {
    var storage;
    switch (type) {
      case 'init':
        if(cov[file]){
          storage = cov[file];
        } else {
          storage = [];
          for (var i = 0; i < line.length; i ++) {
            storage[line[i]] = 0;
          }
          var condition = express;
          var source = start;
          storage.condition = condition;
          storage.source = source;
        }
        cov[file] = storage;
        break;
      case 'line':
        storage = cov[file];
        storage[line] ++;
        break;
      case 'cond':
        storage = cov[file];
        storage.condition[line] ++;
        return express;
    }
  }

  BASE._$jscoverage = cov;
  BASE._$jscmd = jscmd;
  jscmd(file, 'init', lines, conds, source);
})('eachy.js', [1,3,4,6,7,8,13,13,15,17], {"5_10_29":0,"5_10_3":0,"5_17_22":0,"5_49_8":0,"5_61_12":0,"12_6_43":0,"12_6_29":0,"12_39_10":0,"14_13_47":0,"14_13_29":0,"14_46_14":0}, ["(function(global) {","  function eachy(items, iterator, callback) {","    var index = 0, results = [];","    (function next(err) {","      if (err || index === items.length) return (callback || function(){})(err, results);","      iterator(items[index], function(err, result) {","        results[index++] = result;","        next(err);","      }, index);","    })();","  }","  if (typeof define !== 'undefined' && define.amd) {","    define(function() { return eachy; });","  } else if (typeof module !== 'undefined' && module.exports) {","    module.exports = eachy;","  } else {","    global.seriesEach = eachy;","  }","})(this);",""]);
_$jscmd("eachy.js", "line", 1);

(function(global) {
    function eachy(items, iterator, callback) {
        _$jscmd("eachy.js", "line", 3);
        var index = 0, results = [];
        _$jscmd("eachy.js", "line", 4);
        (function next(err) {
            if (_$jscmd("eachy.js", "cond", "5_10_29", _$jscmd("eachy.js", "cond", "5_10_3", err) || _$jscmd("eachy.js", "cond", "5_17_22", index === items.length))) return (_$jscmd("eachy.js", "cond", "5_49_8", callback) || _$jscmd("eachy.js", "cond", "5_61_12", function() {}))(err, results);
            _$jscmd("eachy.js", "line", 6);
            iterator(items[index], function(err, result) {
                _$jscmd("eachy.js", "line", 7);
                results[index++] = result;
                _$jscmd("eachy.js", "line", 8);
                next(err);
            }, index);
        })();
    }
    if (_$jscmd("eachy.js", "cond", "12_6_43", _$jscmd("eachy.js", "cond", "12_6_29", typeof define !== "undefined") && _$jscmd("eachy.js", "cond", "12_39_10", define.amd))) {
        _$jscmd("eachy.js", "line", 13);
        define(function() {
            _$jscmd("eachy.js", "line", 13);
            return eachy;
        });
    } else if (_$jscmd("eachy.js", "cond", "14_13_47", _$jscmd("eachy.js", "cond", "14_13_29", typeof module !== "undefined") && _$jscmd("eachy.js", "cond", "14_46_14", module.exports))) {
        _$jscmd("eachy.js", "line", 15);
        module.exports = eachy;
    } else {
        _$jscmd("eachy.js", "line", 17);
        global.seriesEach = eachy;
    }
})(this);