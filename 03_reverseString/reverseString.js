const reverseString = function(string) {
    let reverseAsArray = [];

    for( let i = string.length - 1; i >= 0; i--) {
        reverseAsArray.push(string[i]);
    }
    return reverseAsArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
