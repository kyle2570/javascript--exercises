const add = function (a, b) {
  return a + b;

};

const subtract = function (a, b) {
  return a - b;

};

const sum = function (array) {
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function (array) {
  return array.reduce((total, num) => total * num, 1);

};

const power = function (a, b) {
  return a ** b;


};

const factorial = function (number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum = sum * i;
  }

  return sum;


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
