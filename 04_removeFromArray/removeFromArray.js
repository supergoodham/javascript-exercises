const removeFromArray = function( inArray, num1, num2, num3, num4 ) {
    let markedPlace = [];
    for(let i = 0; i < inArray.length; i++) {
        if(inArray[i] == num1 || inArray[i] == num2 || inArray[i] == num3 || inArray[i] == num4) {
            markedPlace.unshift(i);
        }
    }

    while (markedPlace.length > 0) {
        inArray.splice(markedPlace[0], 1);
        markedPlace.shift();
    }

    return inArray;
    // for( let i = 0;;) {
    //     if( i > inArray.length - 1) {break;}

    //     if(inArray[i] == num) {
    //         inArray = inArray.slice(i);
    //         continue;
    //     } else {
    //         i++;
    //     }
    // }

    // return inArray;
};

// Do not edit below this line
module.exports = removeFromArray;
