/**
 * @author John Pittman <johnrichardpittman@gmail.com>
 */

var header = '\"use strict\";\n'

var expression = /('|")use strict('|");*(\r\n|\n|\r)*/g;

function usestrict(source, opts) {
    var convertedText = source.toString();

    convertedText = convertedText.replace(expression, '');
    convertedText = header + convertedText;

    return convertedText;
};

module.exports = usestrict;
