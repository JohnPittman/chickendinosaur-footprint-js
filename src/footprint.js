/**
 * @author John Pittman <johnrichardpittman@gmail.com>
 */

var fs = require('fs');
var path = require('path');
var usestrictTransform = require('./usestrictTransform.js');
var babelTransform = require('./babelTransform.js');

var opts = {};
var data = '';

var FootprintTransformerTools = {
    src: function(filePath) {
        opts.src = filePath;
        data = fs.readFileSync(filePath, 'utf-8');

        return this;
    },
    dest: function(filePath) {
        if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath));
        }

        fs.writeFileSync(filePath, data);

        return this;
    },
    transform: function(transform) {
        var beforeBytes = data.length; // capture bytes before transform
        data = transform(data, opts); //  capture output
        var afterBytes = data.length; // capture bytes after transform

        if (opts.debug) {
            var beforeKB = beforeBytes * 0.001;
            console.log('<--- Transform: ' + transform.name + ' --->');
            console.log();
            console.log('Input: ' + opts.src);
            console.log('Before: ' + beforeKB + ' KB');

            var afterKB = afterBytes * 0.001;
            console.log('After: ' + afterKB + ' KB');
            console.log('Differences:');
            console.log((beforeKB - afterKB) + ' KB');
            console.log((beforeKB - afterKB) / beforeKB * 100 + ' %');
            console.log();
        }

        return this;
    }
};

function footprintTransformer(options) {
    opts = options || {};

    return FootprintTransformerTools;
}

module.exports = {
    Transformer: footprintTransformer,
    Transform: {
        usestrict: usestrictTransform,
        babel: babelTransform
    }
};
