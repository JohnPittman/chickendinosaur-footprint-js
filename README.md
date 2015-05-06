<h1>Notes</h1>

Gulp module for reorganizing redundant code. Each compressor can be used without gulp.
Wrote this so I can be at peace migrating to ES6 early and using Browserify. Minimizes the footprint on concatinated files.
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

<h3>How to use</h3>

<h4>Compressors</h4>

footprint.Compressor.UseStrict
footprint.Compressor.Babel

<h4>Gulp</h4>

```javascript
var footprint = require('chickendinosaur-footprint');

gulp.task('footprint', function() {
    footprint.setOptions({
        debug: true // Outputs file size information from the compression.
    });

    return gulp.src('./babelBundle.js')
        .pipe(footprint.compress(footprint.Compressor.Babel))
        .pipe(gulp.dest('./dist'));
});
```

<h4>Standalone</h4>

```javascript
var footprint = require('chickendinosaur-footprint');
var fs = require('fs');

var text = fs.readFileSync('./babelBundle.js', 'utf-8');

footprint.Compressor.Babel.compress(text);
```

<h3>Example</h3>

Two small classes using ES6 with Babel transpiler, Browserify with minimum babeling on the parent class.

<h4>Results</h4>

- Before: 16.922 KB
- After: 15.194 KB
- Difference:
- 1.7279999999999998 KB
- 10.21155891738565 %

<h1>Release Notes</h1>

<h3></h3>