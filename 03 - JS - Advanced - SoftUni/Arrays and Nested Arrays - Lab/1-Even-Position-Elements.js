function printEvenPositionEl(input) {
let arr = input;
return arr.filter((el, i) => i % 2 === 0)
          .join(' ');

 
}

console.log(printEvenPositionEl(['20', '30', '40', '50', '60']));