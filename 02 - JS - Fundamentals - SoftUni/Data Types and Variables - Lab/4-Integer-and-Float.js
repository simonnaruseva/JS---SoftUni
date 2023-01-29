function printSum(firstNum, secondNum, thirdNum) {
let sum = firstNum + secondNum + thirdNum;

if(Number.isInteger(sum) == true) {
    console.log(`${sum} - Integer`);
} else {
console.log(`${sum} - Float`);
}
}

printSum(9, 100, 1.1);