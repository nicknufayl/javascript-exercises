const palindromes = function (string) {
processedString = string.toLowerCase().replace(/[^a-z]/g, ''); // replace all non-characters with blank space

newString = processedString
.split('')
.reverse()
.join('')

return newString === processedString;

};

// Do not edit below this line
module.exports = palindromes;
