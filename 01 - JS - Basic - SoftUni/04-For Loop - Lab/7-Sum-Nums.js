function printSumNums(input) {
  let letter = input[0];
  let sum = 0;
  for(i = 0; i < letter.length; i++) {
      let num = Number(letter[i]);
      sum += num;
     
  }
  console.log(`The sum of the digits is:${sum}`);
  
  }
  
  printSumNums((["564891"]));

