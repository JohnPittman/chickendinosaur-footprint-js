/**
 * @author John Pittman <johnrichardpittman@gmail.com>
 */

var usestrictTransform = require('./usestrictTransform');

var headers = {
    // Minified versions
    exports: 'Object.defineProperty(exports, \'__esModule\', {value: true});',
    _interopRequireDefault: 'function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \'default\': obj }; }',
    _classCallCheck: 'function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x, property = _x2, receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if (\'value\' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };',
    _createClass: 'var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\'value\' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();',
    _get: 'var _get=function(a,b,c){for(var d=!0;d;){h=i=j=void 0,d=!1;var e=a,f=b,g=c,h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var j=h.get;return void 0===j?void 0:j.call(g)}var i=Object.getPrototypeOf(e);if(null===i)return void 0;a=i,b=f,c=g,d=!0}};',
    _inherits: 'function _inherits(subClass, superClass) { if (typeof superClass !== \'function\' && superClass !== null) { throw new TypeError(\'Super expression must either be null or a function, not \' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }'
};

var headerExpressions = {
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

var staticCode = {
    require_interopRequireDefault: "var $2=_interopRequireDefault(require('$1'));"
};

var staticCodeExpressions = {
    require_interopRequireDefault: [
        /var\s+\w+\s*=\s*require\((?:'|")([\.\/\\a-zA-Z0-9-]+)(?:'|")\)(?:;|,)\s*var\s+(_\w+)\s*=\s*_interopRequireDefault\(\w+\);/g
    ]
};

var implementedStaticCode = [];
var implementedHeaders = [];

var findExpressions = function(text) {
    //headers
    for (var key in headerExpressions) {
        var versions = headerExpressions[key];
        for (var j = 0, nn = versions.length; j < nn; ++j) {
            if (versions[j].test(text) === true) {
                // store the header name if implemented
                implementedHeaders.push(key);
                break;
            }
        }
    }

    // static code
    for (var key in staticCodeExpressions) {
        var versions = staticCodeExpressions[key];
        for (var j = 0, nn = versions.length; j < nn; ++j) {
            if (versions[j].test(text) === true) {
                // store the header name if implemented
                implementedStaticCode.push(key);
                break;
            }
        }
    }
};

var reset = function() {
    implementedHeaders = [];
    implementedStaticCode = [];
};

function babel(source, opts) {
    var convertedText = source.toString();

    findExpressions(convertedText);

    // headers transform
    for (var i = 0, n = implementedHeaders.length; i < n; ++i) {
        var type = implementedHeaders[i];
        // versions
        var versions = headerExpressions[type];
        for (var j = 0, nn = versions.length; j < nn; ++j) {
            convertedText = convertedText.replace(versions[j], '');
        }

        // apply header
        convertedText = headers[type]+ '\n' + convertedText;
    }

    // static code transform
    for (i = 0, n = implementedStaticCode.length; i < n; ++i) {
        type = implementedStaticCode[i];
        // versions
        versions = staticCodeExpressions[type];
        for (j = 0, nn = versions.length; j < nn; ++j) {
            convertedText = convertedText.replace(versions[j], staticCode[type]);
        }
    }

    // use strict
    convertedText = usestrictTransform(convertedText);

    // reset
    reset();

    return convertedText;
};

module.exports = babel;
