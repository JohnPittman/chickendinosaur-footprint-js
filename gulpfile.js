/**
 * @author John Pittman <johnrichardpittman@gmail.com>
 */

"use strict";

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');
var footprint = require('./src/footprint.js');

gulp.task('test', function() {
    return gulp.src('test/spec/**/*Spec.js')
        .pipe(jasmine({
            reporter: new reporters.TapReporter()
        }));
});

gulp.task('footprint', function() {
	footprint.Transformer({
		debug:true
	})
	.src('./test/mock/usestrictMock.dirty.js')
	.transform(footprint.Transform.usestrict)
	.dest('./dist/usestrictMock.transformed.js')
	.src('./test/mock/babelMock.dirty.js')
	.transform(footprint.Transform.babel)
	.dest('./dist/babelMock.transformed.js');
});