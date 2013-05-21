cypher = require('../lib/cypher.coffee').cypher

describe "Cypher suite", () ->
  it "should respond with count(n)", (done) ->
    cypher 'http://localhost:7474/db/data/transaction/commit', "start n=node(*) return count(n)", {}, (err, results) ->
      expect(results[0]['count(n)']).not.toBeUndefined()
      done()
  it "should be able to create", (done) ->
    cypher 'http://localhost:7474/db/data/transaction/commit', "create n return n", {}, (err, results) ->
      expect(results[0]['n']).not.toBeUndefined()
      done()
