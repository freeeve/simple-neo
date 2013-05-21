(function() {
  var commit, request, rollback, begin;

  request = require('request');

  begin = function(url, statements, cb) {
    if (statements == null) {
      statements = [];
    }
    request({
      method: 'POST',
      json: true,
      url: url,
      body: {
        statements: statements
      }
    }, function(error, response, body) {
      if (!error && response.statusCode === 200 && body) {
        cb(null, result, function(statements, cb1) {
          if (statements == null) {
            statements = [];
          }
          commit(body.commit, statements, cb1);
        }, function(statements, cb1) {
          if (statements == null) {
            statements = [];
          }
          rollback(body.commit, statements, cb1);
        });
      } else {
        cb(body);
      }
    });
  };


  commit = function(url, statements, cb) {
    if (statements == null) {
      statements = [];
    }
    request({
      method: 'POST',
      json: true,
      url: url,
      body: {
        statements: statements
      }
    }, function(error, response, body) {
      if (!error && response.statusCode === 200 && body) {
        cb(null, body.results);
      } else {
        cb(body);
      }
    });
  };

  rollback = function(url, cb) {
    request({
      method: 'DELETE',
      url: url
    }, function(error, response, body) {
      if (!error && response.statusCode === 200 && body) {
        cb(null, body.results);
      } else {
        cb(body);
      }
    });
  };

  exports.begin = begin;
}).call(this);
