<h1>Footprint</h1>

Working with ES6, Babel/Babelify, Browserify? This is for you!

- Node module for reorganizing redundant code. Each Transform is just a method that takes in a text string and can be used by itself.
- Wrote this so I can be at peace migrating to ES6 early and using Browserify and because being bloated bugs me *cough* jQuery. 
- Minimizes the footprint on Babel concatinated files like a Browserify bundle.
- Works on minified (minified with uglify) and non-minified code against any style formatting! (the output is kept in original form for debuggin purposes so even though it will rip against uglified code, you will need to re-uglify after which uglifying should always be done last in the build process anyway)

<h1>Development</h1>

<h4>Requirements</h4>

- nodejs
- npm install -g gulp
- npm install

<h4>Test</h4>

gulp test

<h1>Usage</h1>

<h3>Installation</h3>

npm install chickendinosaur-footprint

<h3>How to use...</h3>

<h4>Transform types</h4>

- footprint.Transform.usestrict
- footprint.Transform.babel (uses footprint.Transform.usestrict)

<h4>Using the transformer in debug</h4>

```javascript
var footprint = require('chickendinosaur-footprint');

footprint.Transformer({
		debug:true
	})
	.src('./test/mock/babelMock.dirty.js')
	.transform(footprint.Transform.babel)
	.dest('./dist/babelMock.transformed.js');
```

<h4>Using a transform as standalone</h4>

```javascript
var footprint = require('chickendinosaur-footprint');
var fs = require('fs');

var text = fs.readFileSync('./test/mock/babelMock.dirty.js', 'utf-8');

var output = footprint.Transform.babel(text);
```

<h4>Chaining Transforms</h4>

```javascript
var footprint = require('chickendinosaur-footprint');

footprint.Transformer({
	debug:true
})
.src('./test/mock/babelMock.dirty.js')
.transform(footprint.Transform.babel)
.transform(footprint.Transform.usestrict)
.dest('./dist/babelMock.transformed.js')
```

<h4>Chaining multiple input/outputs</h4>

```javascript
var footprint = require('chickendinosaur-footprint');

footprint.Transformer({
	debug:true
})
.src('./test/mock/usestrictMock.dirty.js')
.transform(footprint.Transform.usestrict)
.dest('./dist/usestrictMock.transformed.js')
.src('./test/mock/babelMock.dirty.js')
.transform(footprint.Transform.babel)
.dest('./dist/babelMock.transformed.js');
```

<h3>Example</h3>

<h4>Using the footprint.Transform.usestrict Transform</h4>

```javascript
var footprint = require('chickendinosaur-footprint');

gulp.task('footprint', function() {
	footprint.Transformer({
		debug:true
	})
	.src('./test/mock/usestrictMock.dirty.js')
	.transform(footprint.Transform.usestrict)
	.dest('./dist/usestrictMock.transformed.js');
});
```

<h4>Before</h4>

'use strict'
"use strict"
'use strict';
"use strict";

<h4>After</h4>

"use strict";

<h4>Results</h4>

---

Input:
* ./test/mock/usestrictMock.dirty.js
* 0.0560 KB

Transform:
* usestrict

Difference:
* 0.0430 KB
* 76.7857 %

Output:
* ./dist/usestrictMock.transformed.js
* 0.0130 KB

<h1>Release Notes</h1>

<h3>v0.1.6</h3>

- Added consolidatoin for require/_interopRequireDefault statements.
- Changed all output to original form instead of uglified version since you will have to uglify after anyway.