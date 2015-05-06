"use strict";

var fs = require('fs'),
    BabelCompressor = require('./../../src/BabelCompressor');

describe("BabelCompressor", function() {
    it("Removes all redundant babel code.", function(done) {
        fs.readFile(__dirname+'/../mock/babelMock.dirty.js', 'utf-8', function(err, dirtyBabelFile) {
            var convertedFile = BabelCompressor.compress(dirtyBabelFile);

            fs.readFile(__dirname+'/../mock/babelMock.clean.js', 'utf-8', function(err, cleanBabelFile) {
                expect(convertedFile).toEqual(cleanBabelFile);
                done();
            });
        });
    });
});
