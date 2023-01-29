function calc(firstNum, secondNum, operator) {
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let add = (a,b) => a + b;
let subtract = (a, b) => a - b;

switch (operator) {
    case 'multiply':
        return multiply(firstNum, secondNum);
    case 'divide':
        return divide(firstNum, secondNum);
    case 'add':
        return add(firstNum, secondNum);
    case 'subtract':
        return subtract(firstNum, secondNum);
    default:
        break;
}
}

console.log(calc(5,
    5,
    'multiply'
    ));