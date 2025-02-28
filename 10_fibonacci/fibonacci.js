const fibonacci = function (number) {
    let firstNumber = 1;
    let secondNumber = 1;
    let sum = 0;

    if (number == 1 || number == 2) {
        return 1;

    } else if (number < 0) {
        return "OOPS";
    } else {

        for (let i = 0; i < (number - 2); i++) {
            sum = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = sum;
        }

        return sum;

    }




};

// Do not edit below this line
module.exports = fibonacci;
