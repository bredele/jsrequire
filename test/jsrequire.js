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


test('should read path and return js if both js and json file exist', assert => {
  assert.plan(1)
  const json = read(__dirname + '/test')
  assert.deepEqual(json, {
    name: 'testjs'
  })
})
