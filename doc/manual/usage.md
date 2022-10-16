# Usage

The code needs a ES2015+ polyfill to work, for example
[regenerator-runtime/runtime](https://babeljs.io/docs/usage/polyfill).
```js
await import( 'regenerator-runtime/runtime.js' ) ;
// or
import 'regenerator-runtime/runtime.js' ;
```

Then
```js
const codecbase32 = await import( '@codec-bytes/base32' ) ;
// or
import * as codecbase32 from '@codec-bytes/base32' ;
```
