# slugger-unique

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/slugger-unique.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/slugger-unique
[travis-image]: https://img.shields.io/travis/flet/slugger-unique.svg?style=flat-square
[travis-url]: https://travis-ci.org/flet/slugger-unique

Create slugs using [slugger](https://github.com/HenrikJoreteg/slugger) while ensuring they are unique.

## Install

```
npm install slugger-unique
```

## Usage

```js
var SluggerUnique = require('slugger-unique')
var slugger = new SluggerUnique()

slugger.slug('foo')
// returns 'foo'

slugger.slug('foo')
// returns 'foo-1'

slugger.slug('bar')
// returns 'bar'

slugger.slug('foo')
// returns 'foo-2'

slugger.reset()

slugger.slug('foo')
// returns 'foo'

```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE)
