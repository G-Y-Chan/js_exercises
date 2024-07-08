const add = function(...args) {
	return args.reduce((a, b) => a+b, 0);
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(args) {
	return args.reduce((a, b) => a+b, 0);
};

const multiply = function(args) {
    return args.reduce((a, b) => a*b, 1);
};

const power = function(num, power) {
	return num**power;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};