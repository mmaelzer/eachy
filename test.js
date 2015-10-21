var each = (function() {
  return process.env.USE_COVERAGE
    ? require('./eachy-cov')
    : require('./eachy');
})();

exports.eachyBaseTest = function(t) {
  var result = [];
  each([1,2,3], function(n, done) {
    result.push(n * 2);
    done();
  }, function(err) {
    t.notEqual(Boolean(err), true, 'If no error is generated, no value passed to the final callback');
    t.deepEqual([2,4,6], result, 'Iterator function is called');
  });

  t.done();
};
 
exports.eachyAsyncTest = function(t) {
  var result2 = [];
  each([4,8,16], function(n, done) {
    process.nextTick(function() {
      result2.push(n/2);
      done();
    });
  }, function(err) {
    t.deepEqual([2,4,8], result2, 'Eachy handles async functions properly');
    t.done();
  });
};

exports.eachyAsyncErrorTest = function(t) {
  var result3 = [];
  each([32, 64, 128], function(n, done) {
    process.nextTick(function() {
      if (n === 32) {
        done(new Error('uh oh'));
      } else {
        result3.push(n);
      }
    });
  }, function(err) {
    t.equal(result3.length, 0, 'Eachy stops iterating when an error is occurred');
    t.ok(err, 'Errors generated are provided to the final callback');
  });

  t.done();
};

exports.eachyIndexTest = function(t) {
  var indexes = [];
  var items = [0,1,2];
  each(items, function(n, done, i) {
    indexes.push(i);
    done();
  }, function() {
    t.deepEqual(items, indexes, 'Index values are provided to the iterator function');
  });

  // Don't throw if no callback is provided
  each([1,2,3], function(n, done) { done(); });

  each([1,2,3], function(n, done) {
    done(null, n * 2);
  }, function(err, doubles) {
    t.deepEqual([2,4,6], doubles, 'Eachy properly returns data provided to the callbacks and respects the item order of the initial array');
  });

  t.done();
};
