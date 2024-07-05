const sumAll = function(first, last) {
    //Checkfor non numeric inputs
    if (typeof first != "number" || typeof last != "number") return "ERROR";
    //Check for negative inputs
    if (first < 0 || last < 0) return "ERROR";
    //Ensure that last is the bigger number among the two
    //Otherwise, swap the two numbers
    if (first > last) {
        let temp = first;
        first = last;
        last = temp;
    }
    //Return value
    let total = 0;
    while (first <= last) {
        total += first;
        first++;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
