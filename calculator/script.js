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