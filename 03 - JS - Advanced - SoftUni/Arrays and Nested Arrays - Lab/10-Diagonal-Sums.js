function sumDiagonal(matrix) {
    let mainDiag = 0;
    let secondDiag = 0;

    for(let i = 0; i < matrix.length; i++) {
        mainDiag += matrix[i][i];
        secondDiag += matrix[i][matrix.length -1 - i];
    }

    console.log(`${mainDiag} ${secondDiag}`);

}

sumDiagonal([[20, 40],
             [10, 60]]
   )