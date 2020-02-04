module.exports = BananaSlug
var slugger = require('slugger')

function BananaSlug () {
  var self = this
  if (!(self instanceof BananaSlug)) return new BananaSlug()

  self.slugs = []
}

/**
 * Generate a unique slug.
 * @param  {string} value String of text to slugify
 * @return {string}       A unique slug string
 */
BananaSlug.prototype.slug = function (value) {
  var self = this
  var slug = slugger(value)
  if (self.slugs.some(slugExists)) {
    var suffix = '-' + self.slugs.filter(slugMatches).length
    slug = slug + suffix
  }

  self.slugs.push(slug)
  return slug

  function slugMatches (s) {
    var slugMatch = new RegExp(slug + '(-[0-9]*)*$')
    return slugMatch.test(s)
  }

  function slugExists (s) {
    return s === slug
  }
}

/**
 * Reset - Forget all previous slugs
 * @return void
 */
BananaSlug.prototype.reset = function () {
  this.slugs = []
}
