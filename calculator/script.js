//Variables to be used during operations
let num1;
let num2;
let operator;

//Function to add two numbers
function add(a, b) {
    return a + b;
}

//Function to subtract one number from another
function subtract(a, b) {
    return a - b;
}

//Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

//Function to divide one number by another
function divide(a, b) {
    return a/b;
}

//Function that calls one of the above function
function operate(opr, operand1, operand2) {
    switch(opr) {
        case "add":
            return add(operand1, operand2);
        case "subtract":
            return subtract(operand1, operand2);
        case "multiply":
            return multiply(operand1, operand2);
        case "divide":
            return divide(operand1, operand2);
        default:
            return 0;
    }
}

//Default display for calculator
const display = document.querySelector(".display");
display.textContent = "0";

/*
Logic flow for displayNum() function
1. Append new numbers to num1 unless an operator was pressed
2. In that case append new numbers to num2
*/
function displayNum(button) {
    if (num1 === undefined) {
        num1 = button.textContent;
        display.textContent = num1;
    } else if (operator === undefined) {
        num1 += button.textContent;
        display.textContent = num1;
    } else if (num2 === undefined) {
        num2 = button.textContent;
        display.textContent = num2;
    } else {
        num2 += button.textContent;
        display.textContent = num2;
    }
}

//Event listeners for number buttons
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => button.addEventListener("click", () => displayNum(button)));

/*
Function to be called when an operator button is pressed
1. If num1 is not initialised, ignore
2. Else if num2 is not initialised, store new operator in opr variable
3. Else, call operate function and store result to num1 and display result
*/
function newOpr(button) {
    console.log('test');
    if (num1 === undefined) {
        return;
    } else if (num2 === undefined) {
        switch(button.textContent) {
            case "+":
                operator = "add";
                break;
            case "-":
                operator = "subtract";
                break;
            case "*":
                operator = "multiply";
                break;
            case "/":
                operator = "divide";
                break;
        }
    } else {
        let res = operate(operator, num1, num2);
        //We can guarantee that num1 and num2 are numbers when operate is called
        //Thus, we only need to check for infinity
        if (res === Number.POSITIVE_INFINITY || res === Number.NEGATIVE_INFINITY) {
            display.textContent = "ERROR";
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
        } 
        //Number can now be safely stored and displayed
        //Check for equal button
        //No new operator should be stored in opr variable
        else if (button.textContent == "=") {
            num1 = res;
            num2 = undefined;
            operator = undefined;
        }
        //Not an equal button
        //New operator can be stored in opr variable
        else {
            num1 = res;
            num2 = undefined;
            switch(button.textContent) {
                case "+":
                    operator = "add";
                    break;
                case "-":
                    operator = "subtract";
                    break;
                case "*":
                    operator = "multiply";
                    break;
                case "/":
                    operator = "divide";
                    break;
            }
        }
    }
}