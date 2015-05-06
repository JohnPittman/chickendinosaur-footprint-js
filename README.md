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

<h4>Installation</h4>

npm install chickendinosaur-footprint

<h4>How to use</h4>

/**
 * Compressors
 */

footprint.Compressor.UseStrict
footprint.Compressor.Babel

/**
 * Gulp
 */

var footprint = require('chickendinosaur-footprint');

gulp.task('footprint', function() {
    footprint.setOptions({
        debug: true // Outputs file size information from the compression.
    });

    return gulp.src('./babelBundle.js')
        .pipe(footprint.compress(footprint.Compressor.Babel))
        .pipe(gulp.dest('./dist'));
});

/**
 * Standalone
 */

var footprint = require('chickendinosaur-footprint');
var fs = require('fs');

var text = fs.readFileSync('./babelBundle.js', 'utf-8');

footprint.Compressor.Babel.compress(text);

<h3>Example</h3>

Two small classes using ES6 with Babel transpiler, Browserify

<h4>Before</h4>

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SomeClass = f()}})(function(){var define,module,exports;return (f
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _ParentClass2 = require('./ParentClass.js');

var _ParentClass3 = _interopRequireDefault(_ParentClass2);

var _Promise = require('native-promise-only');

var _Promise2 = _interopRequireDefault(_Promise);

var SomeClass = (function (_ParentClass) {
    function SomeClass(a) {
        _classCallCheck(this, SomeClass);

        _get(Object.getPrototypeOf(SomeClass.prototype), 'constructor', this).call(this);
        this._a = a;
    }

    _inherits(SomeClass, _ParentClass);

    _createClass(SomeClass, [{
        key: 'aFunc',
        value: function aFunc(arg1) {}
    }, {
        key: 'a',
        get: function () {
            return this._a;
        },
        set: function (a) {
            var newA = a;
            var cb = function cb(e) {
                var innerVar = 0;
                return innerVar;
            };
            this._a = newA;
        }
    }]);

    return SomeClass;
})(_ParentClass3['default']);

exports['default'] = SomeClass;
module.exports = exports['default'];

},{"./ParentClass.js":2,"native-promise-only":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var ParentClass = (function () {
    function ParentClass(a) {
        _classCallCheck(this, ParentClass);

        this._a = a;
    }

    _createClass(ParentClass, [{
        key: "aFunc",
        value: function aFunc(arg1) {}
    }, {
        key: "a",
        get: function () {
            return this._a;
        }
    }]);

    return ParentClass;
})();

exports["default"] = ParentClass;
module.exports = exports["default"];

.....

<h4>After</h4>

"use strict";var _inherits=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(a.__proto__=b)};var _get=function(a,b,c){for(var d=!0;d;){h=i=j=void 0,d=!1;var e=a,f=b,g=c,h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var j=h.get;return void 0===j?void 0:j.call(g)}var i=Object.getPrototypeOf(e);if(null===i)return void 0;a=i,b=f,c=g,d=!0}};var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();var _classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")};var _interopRequireDefault=function(a){return a&&a.__esModule?a:{"default":a}};Object.defineProperty(exports,"__esModule",{value:!0});(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SomeClass = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _ParentClass2 = require('./ParentClass.js');

var _ParentClass3 = _interopRequireDefault(_ParentClass2);

var _Promise = require('native-promise-only');

var _Promise2 = _interopRequireDefault(_Promise);

var SomeClass = (function (_ParentClass) {
    function SomeClass(a) {
        _classCallCheck(this, SomeClass);

        _get(Object.getPrototypeOf(SomeClass.prototype), 'constructor', this).call(this);
        this._a = a;
    }

    _inherits(SomeClass, _ParentClass);

    _createClass(SomeClass, [{
        key: 'aFunc',
        value: function aFunc(arg1) {}
    }, {
        key: 'a',
        get: function () {
            return this._a;
        },
        set: function (a) {
            var newA = a;
            var cb = function cb(e) {
                var innerVar = 0;
                return innerVar;
            };
            this._a = newA;
        }
    }]);

    return SomeClass;
})(_ParentClass3['default']);

exports['default'] = SomeClass;
module.exports = exports['default'];

},{"./ParentClass.js":2,"native-promise-only":3}],2:[function(require,module,exports){
var ParentClass = (function () {
    function ParentClass(a) {
        _classCallCheck(this, ParentClass);

        this._a = a;
    }

    _createClass(ParentClass, [{
        key: "aFunc",
        value: function aFunc(arg1) {}
    }, {
        key: "a",
        get: function () {
            return this._a;
        }
    }]);

    return ParentClass;
})();

exports["default"] = ParentClass;
module.exports = exports["default"];

.....

<h4>Results</h4>

Before: 16.922 KB
After: 15.194 KB
Difference:
1.7279999999999998 KB
10.21155891738565 %

<h1>Release Notes</h1>

<h3>v0.0.1</h3>