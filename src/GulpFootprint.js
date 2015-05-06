/**
 * @author John Pittman <johnrichardpittman@gmail.com>
 */

var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var UseStrictCompressor = require('./UseStrictCompressor.js');
var BabelCompressor = require('./BabelCompressor.js');

// consts
const PLUGIN_NAME = 'gulp-footprints';

function createStream(text) {
    var stream = through();
    stream.write(text);
    return stream;
}

function GulpFootprint() {
    var _this = this;

    this.Compressor = {
        UseStrict: UseStrictCompressor,
        Babel: BabelCompressor
    };

    this._defaultOptions = {
        debug: false
    };

    this.opts = this._defaultOptions;

    this.setOptions = function(options) {
        if (typeof options === 'object') {
            for (var key in options) {
                this.opts[key] = options[key];
            }
        }
    };

    // plugin level function (dealing with files)
    this.compress = function(compressor) {
        if (typeof compressor !== 'object') {
            throw new PluginError(PLUGIN_NAME, 'Missing compressor object!');
        }

        // creating a stream through which each file will pass
        var stream = through.obj(function(file, enc, cb) {
            var beforeBytes = file.contents.length;
            var beforeKB = beforeBytes * 0.001;
            if (_this.opts.debug === true) {
                console.log('<--- Compressor: ' + compressor.constructor.name + ' --->');
                console.log();
                console.log('Input: ' + file.path);
                console.log('Before: ' + beforeKB + ' KB');
            }

            if (file.isStream()) {
                this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
                return cb();
                // // define the streamer that will transform the content
                // var streamer = createStream(compressor.shrink(file.contents));
                // // catch errors from the streamer and emit a gulp plugin error
                // streamer.on('error', this.emit.bind(this, 'error'));
                // // start the transformation
                // file.contents = file.contents.pipe(streamer);
            }

            if (file.isBuffer()) {
                file.contents = new Buffer(compressor.compress(file.contents));
            }

            if (_this.opts.debug === true) {
                var afterBytes = file.contents.length;
                afterKB = afterBytes * 0.001;
                console.log('After: ' + afterKB + ' KB');
                console.log('Difference:');
                console.log((beforeKB - afterKB) + ' KB');
                console.log((beforeKB - afterKB) / beforeKB * 100 + ' %');
                console.log();
            }

            // make sure the file goes through the next gulp plugin
            this.push(file);

            // tell the stream engine that we are done with this file
            cb();
        });

        // returning the file stream
        return stream;
    };
}

// exporting the plugin main function
module.exports = new GulpFootprint();
