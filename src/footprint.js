/**
 * @author John Pittman <johnrichardpittman@gmail.com>
 */

var fs = require('fs');
var path = require('path');
var usestrictTransform = require('./usestrictTransform.js');
var babelTransform = require('./babelTransform.js');

var opts = {};
var data = '';

var beforeBytes = 0;
var afterBytes = 0;
var beforeKB = 0;
var afterKB = 0;
var numDecimalPlaces = 4;

var FootprintTransformerTools = {
    src: function(filePath) {
        data = fs.readFileSync(filePath, 'utf-8');

        if (opts.debug) {
            beforeBytes = data.length; // capture bytes before transform
            beforeKB = beforeBytes * 0.001;

            console.log('---');
            console.log();
            console.log('Input:');
            console.log('* ' + filePath);
            console.log('* ' + beforeKB.toFixed(numDecimalPlaces) + ' KB');
        }

        return this;
    },
    dest: function(filePath) {
        if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath));
        }

        fs.writeFileSync(filePath, data);

        if (opts.debug) {
            console.log('Output:');
            console.log('* ' + filePath);
            console.log('* ' + afterKB.toFixed(numDecimalPlaces) + ' KB');
            console.log();
        }

        return this;
    },
    transform: function(transform) {
        data = transform(data, opts); //  capture output

        if (opts.debug) {
            afterBytes = data.length; // capture bytes after transform
            afterKB = afterBytes * 0.001;

            console.log('Transform: ');
            console.log('* ' + transform.name);
            console.log('Difference:');
            console.log('* ' + (beforeKB - afterKB).toFixed(numDecimalPlaces) + ' KB');
            console.log('* ' + ((beforeKB - afterKB) / beforeKB * 100).toFixed(numDecimalPlaces) + ' %');
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
