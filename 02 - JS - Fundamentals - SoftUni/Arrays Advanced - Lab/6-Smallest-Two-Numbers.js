function printSmallestTwoNums(input) {
input = input.sort((a,b) => a - b);
console.log(input.slice(0,2).join(" "));
}

printSmallestTwoNums([30, 15, 50, 5]);