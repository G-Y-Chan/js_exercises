const fibonacci = function(num) {
    //Array to store previous three fibonacci numbers
    let arr = [0, 1, 1];
    //Deal with inputs of type string
    num = Number(num);
    //Deal with negative numbers
    if (num < 0) {
        return "OOPS";
    } else if (num <= 2) {
        return arr[num];
    } else {
        while (num > 2) {
            for (let i = 0; i < arr.length-1; i++) {
                arr[i] = arr[i+1];
            }
            arr[2] = arr[0] + arr[1];
            num--;
        }
        return arr[2];
    }
};