:fax:
[@codec-bytes/base32](https://codec-bytes.github.io/base32)
==

Base32 encoder/decoder for JavaScript.
See [docs](https://codec-bytes.github.io/base32/index.html).
Parent is [@codec-bytes/about](https://github.com/codec-bytes/about).

```js
import * as ascii from '@codec-bytes/ascii';
import * as base32 from '@codec-bytes/base32';
let bytes = ascii.encode('Hello!');
base32.decode(bytes); // 'JBSWY3DPEE======'
base32.decode(bytes, {variant: 'base32hex'}); // '91IMOR3F44======'
base32.decode(bytes, {variant: 'z-base-32'}); // 'jb1sa5dxrr'
base32.decode(bytes, {variant: 'crockford'}); // '91JPRV3F44'
base32.decode(bytes, {alphabet: 'BCDEFGHIJKLMNOPQRSTUVWXYZ234567A', padding: '.'}); // 'KCTXZ4EQFF......'
```

[![License](https://img.shields.io/github/license/codec-bytes/base32.svg)](https://raw.githubusercontent.com/codec-bytes/base32/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@codec-bytes/base32.svg)](https://www.npmjs.org/package/@codec-bytes/base32)
[![Build](https://img.shields.io/travis/codec-bytes/base32/main.svg)](https://travis-ci.com/codec-bytes/base32/branches)
[![Dependencies](https://img.shields.io/librariesio/github/codec-bytes/base32.svg)](https://github.com/codec-bytes/base32/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/codec-bytes/base32.svg)](https://github.com/codec-bytes/base32/issues)
[![Downloads](https://img.shields.io/npm/dm/@codec-bytes/base32.svg)](https://www.npmjs.org/package/@codec-bytes/base32)

[![Code issues](https://img.shields.io/codeclimate/issues/codec-bytes/base32.svg)](https://codeclimate.com/github/codec-bytes/base32/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/codec-bytes/base32.svg)](https://codeclimate.com/github/codec-bytes/base32/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/codec-bytes/base32/main.svg)](https://codecov.io/gh/codec-bytes/base32)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/codec-bytes/base32.svg)](https://codeclimate.com/github/codec-bytes/base32/trends/technical_debt)
[![Documentation](https://codec-bytes.github.io/base32/badge.svg)](https://codec-bytes.github.io/base32/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@codec-bytes/base32)](https://bundlephobia.com/result?p=@codec-bytes/base32)
