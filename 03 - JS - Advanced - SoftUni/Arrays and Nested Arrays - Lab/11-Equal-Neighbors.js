function printCountofRepeat(matrix) {

    let equals = 0;
    for (let i = 0; i < matrix.length; i++) {
  
      for (let j = 0; j < matrix[i].length; j++) {
        let el = matrix[i][j];
  
        // checks pairs next to each other by col
        if (el === matrix[i][j + 1]) { equals++ }
  
        // checks pairs next to each other by row
        if (i !== matrix.length - 1 && el === matrix[i + 1][j]) { equals++ }
      }
    }
  
    return equals;
  }

console.log(printCountofRepeat([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
))