/**
 * Dependencies(s)
 */

const test = require('tape')
const read = require('..')


test('should read json at given path', assert => {
  assert.plan(1)
  const json = read(__dirname + '/other')
  assert.deepEqual(json, {
    name: 'otherjson'
  })
})


test('should read js at given path', assert => {
  assert.plan(1)
  const json = read(__dirname + '/foo')
  assert.deepEqual(json, {
    name: 'foo'
  })
})
