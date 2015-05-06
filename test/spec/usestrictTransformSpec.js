/**
 * @author John Pittman <johnrichardpittman@gmail.com>
 */

"use strict";

var fs = require('fs'),
    usestrictTransform = require('./../../src/usestrictTransform');

describe("usestrictTransform", function() {
    it("Removes redundant \'use strict\' instances.", function(done) {
        fs.readFile(__dirname+'/../mock/usestrictMock.dirty.js', 'utf-8', function(err, dirtyFile) {
            var convertedFile = usestrictTransform(dirtyFile);

            fs.readFile(__dirname+'/../mock/usestrictMock.clean.js', 'utf-8', function(err, cleanFile) {
                expect(convertedFile).toEqual(cleanFile);
                done();
            });
        });
    });
});
