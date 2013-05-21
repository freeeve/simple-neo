rest = require('request')

exports.cypher = (url, query, params, cb) ->
  rest {
    method: 'POST',
    json: true,
    url: url,
    body: {
      statements: [{
        statement: query,
        parameters: params
      }]
    }
  }, (error, response, body) ->
    if(!error and response.statusCode == 200 and body)
      cols = body.results[0].columns
      data = body.results[0].data
      result = []
      for row in data
        map = {}
        for val, i in row
          map[cols[i]] = val
        result.push(map)
      cb(null, result)
    else
      cb(body, null)
    return
