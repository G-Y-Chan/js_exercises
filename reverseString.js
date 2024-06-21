const reverseString = function(inputString) {
    const oldArray = inputString.split("");
    oldArray.reverse();
    const newString = oldArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
