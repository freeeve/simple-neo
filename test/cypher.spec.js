(function() {
  var cypher;

  cypher = require('../lib/cypher.js').cypher;

  describe("Cypher suite", function() {
    it("should respond with count(n)", function(done) {
      cypher('http://localhost:7474/db/data/transaction/commit', "start n=node(*) return count(n)", {}, function(err, results) {
        expect(results[0]['count(n)']).not.toBeUndefined();
        done();
      });
    });
    it("should be able to create", function(done) {
      cypher('http://localhost:7474/db/data/transaction/commit', "create n return n", {}, function(err, results) {
        expect(results[0]['n']).not.toBeUndefined();
        done();
      });
    });
  });

}).call(this);
