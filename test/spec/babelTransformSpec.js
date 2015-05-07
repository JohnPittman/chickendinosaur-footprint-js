/**
 * @author John Pittman <johnrichardpittman@gmail.com>
 */

"use strict";

var fs = require('fs'),
    babelTransform = require('./../../src/babelTransform');

describe("babelTransform", function() {
    it("Removes all redundant babel code.", function(done) {
        fs.readFile(__dirname+'/../mock/babelMock.dirty.js', 'utf-8', function(err, dirtyBabelFile) {
            var convertedFile = babelTransform(dirtyBabelFile).trim();

            fs.readFile(__dirname+'/../mock/babelMock.clean.js', 'utf-8', function(err, cleanBabelFile) {
                expect(convertedFile).toEqual(cleanBabelFile.trim());
                done();
            });
        });
    });
});