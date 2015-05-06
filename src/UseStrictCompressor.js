/**
 * @author John Pittman <johnrichardpittman@gmail.com>
 */

function UseStrictCompressor() {
    this._header = '\"use strict\";'

    this._expression = /['"]use strict['"];*(\r\n|\n|\r)*/g

    this.compress = function(text) {
        var convertedText = text.toString();

        convertedText = convertedText.replace(this._expression, '');
        convertedText = this._header + convertedText;

        return convertedText.trim();
    };
};

module.exports = new UseStrictCompressor();
