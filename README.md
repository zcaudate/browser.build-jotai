# Jotai and Valtio

Steps to reconstruct this repo

1.  clone jotai and valtio repos
2.  pnpm i - to generate esm artifacts
3.  copy the .js files over to src/jotai and src/valio folders
4.  change the require(….) statements so that files match up
5.  This is super dumb but gives the outputs I need

### Dev

``` javascript
const valtio = require('./valtio')
const valtioUtils = require('./valtio/utils')
const jotai = require('./jotai')
const jotaiUtils = require('./jotai/utils')
const jotaiValtio = require('./jotai/valtio')

window.valtio = valtio
window.valtioUtils = valtioUtils
window.jotai = jotai
window.jotaiUtils = jotaiUtils
window.jotaiValtio = jotaiValtio
```
