# futurenda-babel-config
Babel config used across futurenda projects

## Usage
`npm install futurenda-babel-config`

Note that you can't install as devDependency as npm can't resolve `require('@babel/core') to a devDependency's dependency.

Then create your babel.config.js and inside it:
```javascript
module.exports = require('futurenda-babel-config')(options)
```