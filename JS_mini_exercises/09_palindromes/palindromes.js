const palindromes = function (str) {
    let charArray = [...str]
    .filter(char => /[a-zA-Z0-9]/.test(char))
    .map(char => char.toLowerCase());
    
    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] != charArray[charArray.length-1-i]) {
            return false;
        }
    }
    return true;
};