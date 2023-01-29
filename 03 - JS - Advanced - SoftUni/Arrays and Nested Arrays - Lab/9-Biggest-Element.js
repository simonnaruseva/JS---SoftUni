function printBiggestNum(matrix) {
return Math.max(...matrix.flat());
}

console.log(printBiggestNum([[20, 50, 10],
    [8, 33, 145]]
   ))