const repeatString = function(inputString, repetitions) {
    //Expected behaviour for negative repetitions
    if (repetitions < 0) return "ERROR";
    let returnString = "";
    while (repetitions > 0) {
        returnString += inputString;
        repetitions--;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
