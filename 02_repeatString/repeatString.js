const repeatString = function(string, num) {
    if(num < 0) {return "ERROR"};
    
    let sumString = [];
    for( let i = 0; i < num; i++) {
        sumString[i] = string;
    }
    return sumString.join('');
};

// Do not edit below this line
module.exports = repeatString;
