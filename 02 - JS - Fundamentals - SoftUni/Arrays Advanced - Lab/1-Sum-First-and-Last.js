function sumFirstandLast(input) {
input = input.map(Number);
let firstNum = input[0];
let lastNum = input.pop();

console.log(firstNum + lastNum);
}

sumFirstandLast(['20', '30', '40']);