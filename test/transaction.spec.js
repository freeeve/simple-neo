(function() {
  var begin;

  begin = require('../lib/transaction.js').begin;

  describe("Transaction suite", function() {
    it("should pass this test", function(done) {
      expect(true).toBe(true);
      done();
    });

    it("should begin without any statements", null, function(done) {
      begin('http://localhost:7474/db/data/transaction', function(err, results, commit, rollback) {
        expect(err).toBeUndefined();
        expect(results).toBeUndefined();
        expect(commit).not.toBeUndefined();
        expect(rollback).not.toBeUndefined();
        done();
      });
    });
  });

}).call(this);
