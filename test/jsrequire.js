/**
 * Dependencies(s)
 */

const test = require('tape')
const read = require('jsrequire')


test('should read json at given path', assert => {
  assert.plan(1)
  const json = read(__dirname + '/other')
  assert.deepEqual(json, {
    name: 'otherjson'
  })
})
