function printMatrix(n) {

    let str = ''
    for(let i = 0; i < n; i++) {
      str += `${n} `
    }
    
    let matrix = '';
    for(let i = 0; i < n; i++) {
      matrix += str + '\n'
    }
  
    return matrix;
  
  }

console.log(printMatrix(3));