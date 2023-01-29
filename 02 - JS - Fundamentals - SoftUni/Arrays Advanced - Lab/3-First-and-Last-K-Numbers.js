function printFirtsandLast(input) {
let k = input.shift();

console.log(input.slice(0, k));
console.log(input.slice(input.length - k));
}

printFirtsandLast([2, 7, 8, 9]);