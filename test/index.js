var test = require('tape')
var SluggerUnique = require('../')

test(
  'simple stuff',
  test('multiline collapse CRLF', function (t) {
    var slugger = new SluggerUnique()

    t.equals('foo', slugger.slug('foo'))
    t.equals('foo-bar', slugger.slug('foo bar'))
    t.equals('foo-1', slugger.slug('foo'))

    let loop = null
    for (let i = 0; i < 12; i++) {
      loop = slugger.slug('loop')
    }
    t.equals('loop-11', loop)

    slugger.reset()
    t.equals('foo', slugger.slug('foo'))

    t.end()
  })
)
