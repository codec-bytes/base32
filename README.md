[@aureooms/js-codec-base32](https://aureooms.github.io/js-codec-base32)
==

Base32 encoder/decoder for JavaScript.
See [docs](https://aureooms.github.io/js-codec-base32/index.html).
Parent is [@aureooms/js-codec](https://github.com/aureooms/js-codec).

```js
> import ascii from '@aureooms/js-codec-ascii' ;
> import base32 from '@aureooms/js-codec-base32' ;
> let bytes = ascii.encode('Hello!') ;
> base32.decode( bytes ) ;
'JBSWY3DPEE======'
> base32.decode( bytes , { variant : 'base32hex' } ) ;
'91IMOR3F44======'
> base32.decode( bytes , { variant : 'z-base-32' } ) ;
'jb1sa5dxrr'
> base32.decode( bytes , { variant : 'crockford' } ) ;
'91JPRV3F44'
> base32.decode( bytes , { alphabet : 'BCDEFGHIJKLMNOPQRSTUVWXYZ234567A' , padding : '.' } ) ;
'KCTXZ4EQFF......'
```

[![License](https://img.shields.io/github/license/aureooms/js-codec-base32.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-codec-base32/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-codec-base32.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-codec-base32)
[![Build status](https://img.shields.io/travis/aureooms/js-codec-base32.svg?style=flat)](https://travis-ci.org/aureooms/js-codec-base32)
[![Coverage status](https://img.shields.io/coveralls/aureooms/js-codec-base32.svg?style=flat)](https://coveralls.io/r/aureooms/js-codec-base32)
[![Dependencies status](https://img.shields.io/david/aureooms/js-codec-base32.svg?style=flat)](https://david-dm.org/aureooms/js-codec-base32)
[![Dev dependencies status](https://img.shields.io/david/dev/aureooms/js-codec-base32.svg?style=flat)](https://david-dm.org/aureooms/js-codec-base32?type=dev)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-codec-base32.svg?style=flat)](https://codeclimate.com/github/aureooms/js-codec-base32)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-codec-base32.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-codec-base32)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-codec-base32.svg?style=flat)](https://github.com/aureooms/js-codec-base32/issues)
[![Documentation](https://aureooms.github.io/js-codec-base32/badge.svg)](https://aureooms.github.io/js-codec-base32/source.html)
