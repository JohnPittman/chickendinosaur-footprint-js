/**
 * @author John Pittman <johnrichardpittman@gmail.com>
 */

var usestrictTransform = require('./usestrictTransform');

var headers = {
    // Minified versions
    exports: 'Object.defineProperty(exports,"__esModule",{value:!0});',
    _interopRequireDefault: 'var _interopRequireDefault=function(a){return a&&a.__esModule?a:{"default":a}};',
    _classCallCheck: 'var _classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")};',
    _createClass: 'var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();',
    _get: 'var _get=function(a,b,c){for(var d=!0;d;){h=i=j=void 0,d=!1;var e=a,f=b,g=c,h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var j=h.get;return void 0===j?void 0:j.call(g)}var i=Object.getPrototypeOf(e);if(null===i)return void 0;a=i,b=f,c=g,d=!0}};',
    _inherits: 'var _inherits=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(a.__proto__=b)};'
};

var expressions = {
    exports: [
        // Initial
        /Object\s*\.defineProperty\s*\(\s*exports\s*,\s*('|")__esModule('|")\s*,\s*{\s*value\s*:\s*true\s*}\s*\)\s*;/g,
        // Min
        /Object\.defineProperty\(exports,"__esModule",{value:\!0}\);/g
    ],
    _interopRequireDefault: [
        // Initial
        /var\s+_interopRequireDefault\s*=\s*function\s*\(\s*obj\s*\)\s*{\s*return\s*obj\s*&&\s*obj\s*\.__esModule\s*\?\s*obj\s*:\s*{\s*('|")default('|")\s*:\s*obj\s*}\s*;\s*}\s*;/g,
        // Min
        /var _interopRequireDefault=function\(a\){return a&&a\.__esModule\?a:{"default":a}};/g
    ],
    _classCallCheck: [
        // Initial
        /var\s+_classCallCheck\s*=\s*function\s*\(instance\s*,\s*Constructor\s*\)\s*{\s*if\s*\(\s*\!\s*\(\s*instance\s*instanceof\s*Constructor\s*\)\s*\)\s*{\s*throw\s*new\s*TypeError\s*\(\s*('|")Cannot\s*call\s*a\s*class\s*as\s*a\s*function('|")\s*\)\s*;\s*}\s*}\s*;/g,
        // Min
        /var _classCallCheck=function\(a,b\){if\(\!\(a instanceof b\)\)throw new TypeError\("Cannot call a class as a function"\)};/g
    ],
    _createClass: [
        // Initial
        /var\s+_createClass\s*=\s*\(function\s*\(\)\s*{\s*function\s*defineProperties\(target,\s*props\)\s*{\s*for\s*\(var\s*i\s*=\s*0;\s*i\s*<\s*props.length;\s*i\+\+\)\s*{\s*var\s*descriptor\s*=\s*props\[i\];\s*descriptor.enumerable\s*=\s*descriptor.enumerable\s*\|\|\s*false;\s*descriptor.configurable\s*=\s*true;\s*if\s*\(('|")value('|")\s*in\s*descriptor\)\s*descriptor.writable\s*=\s*true;\s*Object.defineProperty\(target,\s*descriptor.key,\s*descriptor\);\s*}\s*}\s*return\s*function\s*\(Constructor,\s*protoProps,\s*staticProps\)\s*{\s*if\s*\(protoProps\)\s*defineProperties\(Constructor.prototype,\s*protoProps\);\s*if\s*\(staticProps\)\s*defineProperties\(Constructor,\s*staticProps\);\s*return\s*Constructor;\s*};\s*}\)\(\);/g,
        // Min
        /var _createClass=function\(\){function a\(a,b\){for\(var c=0;c<b.length;c\+\+\){var d=b\[c\];d\.enumerable=d.enumerable\|\|\!1,d\.configurable=\!0,"value"in d&&\(d\.writable=\!0\),Object\.defineProperty\(a,d\.key,d\)}}return function\(b,c,d\){return c&&a\(b\.prototype,c\),d&&a\(b,d\),b}}\(\);/g
    ],
    _get: [
        // Initial
        /var\s+_get\s*=\s*function\s*get\(_x,\s*_x2,\s*_x3\)\s*{\s*var\s*_again\s*=\s*true;\s*_function:\s*while\s*\(_again\)\s*{\s*desc\s*=\s*parent\s*=\s*getter\s*=\s*undefined;\s*_again\s*=\s*false;\s*var\s*object\s*=\s*_x,\s*property\s*=\s*_x2,\s*receiver\s*=\s*_x3;\s*var\s*desc\s*=\s*Object\.getOwnPropertyDescriptor\(object,\s*property\);\s*if\s*\(desc\s*===\s*undefined\)\s*{\s*var\s*parent\s*=\s*Object\.getPrototypeOf\(object\);\s*if\s*\(parent\s*===\s*null\)\s*{\s*return\s*undefined;\s*}\s*else\s*{\s*_x\s*=\s*parent;\s*_x2\s*=\s*property;\s*_x3\s*=\s*receiver;\s*_again\s*=\s*true;\s*continue\s*_function;\s*}\s*}\s*else\s*if\s*\(('|")value('|")\s*in\s*desc\)\s*{\s*return\s*desc\.value;\s*}\s*else\s*{\s*var\s*getter\s*=\s*desc\.get;\s*if\s*\(getter\s*===\s*undefined\)\s*{\s*return\s*undefined;\s*}\s*return\s*getter\.call\(receiver\);\s*}\s*}\s*};/g,
        // Min
        /var _get=function\(a,b,c\){for\(var d=\!0;d;\){h=i=j=void 0,d=\!1;var e=a,f=b,g=c,h=Object\.getOwnPropertyDescriptor\(e,f\);if\(void 0!==h\){if\("value"in h\)return h\.value;var j=h\.get;return void 0===j\?void 0:j.call\(g\)}var i=Object\.getPrototypeOf\(e\);if\(null===i\)return void 0;a=i,b=f,c=g,d=\!0}};/g
    ],
    _inherits: [
        // Initial
        /var\s+_inherits\s*=\s*function\s*\(subClass,\s*superClass\)\s*{\s*if\s*\(typeof\s*superClass\s*!==\s*('|")function('|")\s*&&\s*superClass\s*!==\s*null\)\s*{\s*throw\s*new\s*TypeError\(('|")Super\s*expression\s*must\s*either\s*be\s*null\s*or\s*a\s*function,\s*not\s*('|")\s*\+\s*typeof\s*superClass\);\s*}\s*subClass\.prototype\s*=\s*Object\.create\(superClass\s*&&\s*superClass\.prototype,\s*{\s*constructor:\s*{\s*value:\s*subClass,\s*enumerable:\s*false,\s*writable:\s*true,\s*configurable:\s*true\s*}\s*}\);\s*if\s*\(superClass\)\s*subClass\.__proto__\s*=\s*superClass;\s*};/g,
        // Min
        /var _inherits=function\(a,b\){if\("function"\!=typeof b&&null\!==b\)throw new TypeError\("Super expression must either be null or a function, not "\+typeof b\);a.prototype=Object.create\(b&&b\.prototype,{constructor:{value:a,enumerable:\!1,writable:\!0,configurable:\!0}}\),b&&\(a\.__proto__=b\)};/g
    ]
};

var implementedHeaders = [];

var findExpressions = function(text) {
    for (var key in expressions) {
        var versions = expressions[key];
        for (var j = 0, nn = versions.length; j < nn; ++j) {
            if (versions[j].test(text) === true) {
                // store the header name if implemented
                implementedHeaders.push(key);
                break;
            }
        }
    }
};

var reset = function() {
    implementedHeaders = [];
};

function babel(source, opts) {
    var convertedText = source.toString();

    findExpressions(convertedText);

    for (var i = 0, n = implementedHeaders.length; i < n; ++i) {
        var headerType = implementedHeaders[i];
        // versions
        var versions = expressions[headerType];
        for (var j = 0, nn = versions.length; j < nn; ++j) {
            convertedText = convertedText.replace(versions[j], '');
        }

        // apply header
        convertedText = headers[headerType] + convertedText;
    }

    // use strict
    convertedText = usestrictTransform(convertedText);

    // reset
    reset();

    return convertedText;
};

module.exports = babel;
