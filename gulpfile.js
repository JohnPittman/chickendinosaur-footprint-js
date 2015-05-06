var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');

gulp.task('test', function() {
    return gulp.src('test/spec/**/*.js')
        .pipe(jasmine({
            reporter: new reporters.TapReporter()
        }));
});