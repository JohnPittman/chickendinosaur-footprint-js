"use strict";

var fs = require('fs'),
    UseStrictCompressor = require('./../../src/UseStrictCompressor');

describe("UseStrictCompressor", function() {
    it("Removes redundant \'use strict\' instances.", function(done) {
        fs.readFile(__dirname+'/../mock/usestrictMock.dirty.js', 'utf-8', function(err, dirtyFile) {
            var convertedFile = UseStrictCompressor.compress(dirtyFile);

            fs.readFile(__dirname+'/../mock/usestrictMock.clean.js', 'utf-8', function(err, cleanFile) {
                expect(convertedFile).toEqual(cleanFile);
                done();
            });
        });
    });
});
