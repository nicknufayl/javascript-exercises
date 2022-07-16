const repeatString = function(word, num) {
    var repeatedWord = ''

    if (num < 0) {
        return 'ERROR'
    }

    for (i = 0; i < num; i++) {
        repeatedWord += word
    }

    return repeatedWord
};

// Do not edit below this line
module.exports = repeatString;
