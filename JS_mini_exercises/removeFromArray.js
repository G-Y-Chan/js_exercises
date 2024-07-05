const removeFromArray = function(arr, ...rest) {
    return arr.filter(x => removable(x, rest));
};

function removable(element, arr) {
    if (arr.includes(element)) {
        return false;
    }
    return true;
}

// Do not edit below this line
module.exports = removeFromArray;
