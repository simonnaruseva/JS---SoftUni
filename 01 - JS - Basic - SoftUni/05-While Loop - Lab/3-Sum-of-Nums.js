function sumNums(input) {
    let num = Number(input[0]);

    let index = 1;
    let currentNum = Number(input[index]);
    index++;
    console.log(index);
    let sum = 0;

    while(sum < num) {
      
      
        currentNum = Number(input[index]);
        index++;

        sum += currentNum;
     
    }
   
    console.log(sum);
}

//  sumNums((["100", "10", "20", "30", "40"]))

sumNums((["20", "1", "2", "3", "4", "5", "6"]))