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
        /Object\s*\.defineProperty\s*\(\s*exports\s*,\s*('|")__esModule('|")\s*,\s*{\s*value\s*:\s*(true|\!0)\s*}\s*\)\s*;*/g,
    ],
    _interopRequireDefault: [
        /var\s+_interopRequireDefault\s*=\s*function\s*\(\s*\w+\s*\)\s*{\s*return\s+\w+\s*&&\s*\w+\s*\.__esModule\s*\?\s*\w+\s*:\s*{\s*('|")default('|")\s*:\s*\w+\s*}\s*;*\s*}\s*;*/g
    ],
    _classCallCheck: [
        /var\s+_classCallCheck\s*=\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)\s*{\s*if\s*\(\s*\!\s*\(\s*\w+\s+instanceof\s+\w+\s*\)\s*\)\s*{*\s*throw\s+new\s+TypeError\s*\(\s*('|")Cannot call a class as a function('|")\s*\)\s*;*\s*}*\s*}\s*;*/g
    ],
    _createClass: [
        // Initial
        /var\s+_createClass\s*=\s*\(\s*function\s*\(\s*\)\s*{\s*function\s+defineProperties\s*\(\s*target\s*,\s*props\s*\)\s*{\s*for\s*\(var\s+i\s*=\s*0\s*;\s*i\s*<\s*props\s*\.length\s*;\s*i\+\+\s*\)\s*{\s*var\s+descriptor\s*=\s*props\s*\[\s*i\s*\]\s*;\s*descriptor\s*\.enumerable\s*=\s*descriptor\s*\.enumerable\s*\|\|\s*false\s*;\s*descriptor\s*\.configurable\s*=\s*true\s*;\s*if\s*\(('|")value('|")\s*in\s+descriptor\)\s*descriptor\s*\.writable\s*=\s*true\s*;\s*Object\s*\.defineProperty\s*\(\s*target\s*,\s*descriptor\s*\.key,\s*descriptor\s*\)\s*;\s*}\s*}\s*return\s+function\s*\(\s*Constructor\s*,\s*protoProps\s*,\s*staticProps\s*\)\s*{\s*if\s*\(\s*protoProps\s*\)\s*defineProperties\s*\(\s*Constructor\s*.prototype\s*,\s*protoProps\s*\)\s*;\s*if\s*\(\s*staticProps\s*\)\s*defineProperties\s*\(\s*Constructor\s*,\s*staticProps\s*\)\s*;\s*return\s+Constructor\s*;\s*}\s*;\s*}\s*\)\s*\(\s*\)\s*;*/g,
        // Min
        /var\s+_createClass\s*=\s*function\s*\(\s*\)\s*{\s*function\s+\w+\s*\(\s*\w+\s*,\s*\w+\s*\)\s*{\s*for\s*\(\s*var\s+\w+\s*=\s*0\s*;\s*\w+\s*<\s*\w+\s*\.length\s*;\s*\w+\+\+\s*\)\s*{\s*var\s+\w+\s*=\s*\w+\s*\[\s*\w+\s*\]\s*;\s*\w+\s*\.enumerable\s*=\s*\w+\s*\.enumerable\s*\|\|\s*\!1\s*,\s*\w+\s*\.configurable\s*=\s*\!0\s*,\s*('|")value('|")\s*in\s+\w+\s*&&\s*\(\s*\w+\s*\.writable\s*=\s*\!0\s*\)\s*,\s*Object\s*\.defineProperty\s*\(\s*\w+\s*,\s*\w+\s*\.key\s*,\s*\w+\s*\)\s*}\s*}\s*return\s+function\s*\(\s*\w+\s*,\s*\w+\s*,\s*\w+\s*\)\s*{\s*return\s+\w+\s*&&\s*\w+\s*\(\s*\w+\s*\.prototype\s*,\s*\w+\s*\)\s*,\s*\w+\s*&&\s*\w+\s*\(\s*\w+\s*,\s*\w+\s*\)\s*,\s*\w+\s*}\s*}\s*\(\s*\)\s*;*/g
    ],
    _get: [
        // Initial
        /var\s+_get\s*=\s*function\s+get\s*\(\s*_x\s*,\s*_x2\s*,\s*_x3\s*\)\s*{\s*var\s*_again\s*=\s*true\s*;\s*_function\s*:\s*while\s*\(\s*_again\s*\)\s*{\s*desc\s*=\s*parent\s*=\s*getter\s*=\s*undefined\s*;\s*_again\s*=\s*false\s*;\s*var\s*object\s*=\s*_x\s*,\s*property\s*=\s*_x2\s*,\s*receiver\s*=\s*_x3\s*;\s*var\s*desc\s*=\s*Object\s*\.getOwnPropertyDescriptor\s*\(\s*object\s*,\s*property\s*\)\s*;\s*if\s*\(\s*desc\s*===\s*undefined\s*\)\s*{\s*var\s*parent\s*=\s*Object\s*\.getPrototypeOf\s*\(\s*object\s*\)\s*;\s*if\s*\(\s*parent\s*===\s*null\s*\)\s*{\s*return\s+undefined\s*;\s*}\s*else\s*{\s*_x\s*=\s*parent\s*;\s*_x2\s*=\s*property\s*;\s*_x3\s*=\s*receiver\s*;\s*_again\s*=\s*true\s*;\s*continue\s+_function\s*;\s*}\s*}\s*else\s*if\s*\(\s*('|")value('|")\s*in\s+desc\s*\)\s*{\s*return\s+desc\s*\.value\s*;\s*}\s*else\s*{\s*var\s*getter\s*=\s*desc\s*\.get\s*;\s*if\s*\(\s*getter\s*===\s*undefined\s*\)\s*{\s*return\s*undefined\s*;\s*}\s*return\s*getter\s*\.call\s*\(\s*receiver\s*\)\s*;\s*}\s*}\s*}\s*;*/g,
        // Min
        /var\s+_get\s*=\s*function\s*\(\s*\w+\s*,\s*\w+\s*,\s*\w+\s*\)\s*{\s*for\s*\(\s*var\s+\w+\s*=\s*\!0\s*;\s*\w+\s*;\s*\)\s*{\s*\w+\s*=\s*\w+\s*=\s*\w+\s*=\s*void\s+0\s*,\s*\w+\s*=\s*\!1\s*;\s*var\s+\w+\s*=\s*\w+\s*,\s*\w+\s*=\s*\w+\s*,\s*\w+\s*=\s*\w+\s*,\s*\w+\s*=\s*Object\s*\.getOwnPropertyDescriptor\s*\(\s*\w+\s*,\s*\w+\s*\)\s*;\s*if\s*\(\s*void\s+0\s*\!==\s*\w+\s*\)\s*{\s*if\s*\(\s*('|")value('|")\s*in\s+\w+\s*\)\s*return\s+\w+\s*\.value\s*;\s*var\s+\w+\s*=\s*\w+\s*\.get\s*;\s*return\s+void\s+0\s*===\s*\w+\s*\?\s*void\s+0\s*:\s*\w+\s*\.call\s*\(\s*\w+\s*\)\s*}\s*var\s+\w+\s*=\s*Object\s*\.getPrototypeOf\s*\(\s*\w+\s*\)\s*;\s*if\s*\(\s*null\s*===\s*\w+\s*\)\s*return\s+void\s+0\s*;\s*\w+\s*=\s*\w+\s*,\s*\w+\s*=\s*\w+\s*,\s*\w+\s*=\s*\w+\s*,\s*\w+\s*=\s*\!0\s*}\s*}\s*;*/g
    ],
    _inherits: [
        // Initial
        /var\s+_inherits\s*=\s*function\s*\(\s*subClass\s*,\s*superClass\s*\)\s*\s*{\s*if\s*\(\s*typeof\s+superClass\s*!==\s*('|")function('|")\s*&&\s*superClass\s*!==\s*null\s*\)\s*{\s*throw\s+new\s+TypeError\s*\(\s*('|")Super expression must either be null or a function, not ('|")\s*\+\s*typeof\s+superClass\s*\)\s*;\s*}\s*subClass\s*\.prototype\s*=\s*Object\s*\.create\s*\(\s*superClass\s*&&\s*superClass\s*\.prototype\s*,\s*{\s*constructor\s*:\s*{\s*value\s*:\s*subClass\s*,\s*enumerable\s*:\s*false\s*,\s*writable\s*:\s*true\s*,\s*configurable\s*:\s*true\s*}\s*}\s*\)\s*;\s*if\s*\(\s*superClass\s*\)\s*subClass\s*\.__proto__\s*=\s*superClass\s*;\s*}\s*;*/g,
        // Min
        /var\s+_inherits\s*=\s*function\s*\(\s*\w+\s*,\s*\w+\s*\)\s*{\s*if\s*\(\s*('|")function('|")\s*\!=\s*typeof\s+\w+\s*&&\s*null\s*\!==\s*\w+\s*\)\s*throw\s+new\s+TypeError\s*\(\s*('|")Super expression must either be null or a function, not ('|")\s*\+\s*typeof\s+\w+\s*\)\s*;\s*\w+\s*.prototype\s*=\s*Object\s*\.create\s*\(\s*\w+\s*&&\s*\w+\s*\.prototype\s*,\s*{\s*constructor\s*:\s*{\s*value\s*:\s*\w+\s*,\s*enumerable\s*:\s*\!1\s*,\s*writable\s*:\s*\!0\s*,\s*configurable\s*:\s*\!0\s*}\s*}\s*\)\s*,\s*\w+\s*&&\s*\(\s*\w+\s*\.__proto__\s*=\s*\w+\s*\)\s*}\s*;*/g
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
