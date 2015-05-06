<h1>Notes</h1>

Node module for reorganizing redundant code. Each Transform is just a method that takes in a text string and can be used by itself.
Wrote this so I can be at peace migrating to ES6 early and using Browserify. Minimizes the footprint on Babel concatinated files like a Browserify bundle.
Works on minified and non-minified code.

Note: The regular expressions are currently in rough draft format so they will work on code minified with the 'uglify' module and babel formatted code and basic forms. As long as you do not purposely mangle the babel code formatting everything works fine.

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

<h3>How To Use</h3>

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

<--- Transform: usestrict --->

- Input: ./test/mock/usestrictMock.dirty.js
- Before: 0.056 KB
- After: 0.013000000000000001 KB
- Differences:
- 0.043 KB
- 76.78571428571428 %

<h1>Release Notes</h1>
