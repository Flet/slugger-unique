var test = require('tape')
var SluggerUnique = require('../')

test('simple stuff', test('multiline collapse CRLF', function (t) {
  var slugger = new SluggerUnique()

  t.equals('foo', slugger.slug('foo'))
  t.equals('foo-bar', slugger.slug('foo bar'))
  t.equals('foo-1', slugger.slug('foo'))

  slugger.reset()
  t.equals('foo', slugger.slug('foo'))

  t.end()
}))
