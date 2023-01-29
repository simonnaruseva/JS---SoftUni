function numsDevided(input) {
    let firstNum = input[0];
    let secondNum = input[1];
    let sum = 0;
    
    for(i = firstNum; i <= secondNum; i++) {
        if(i % 9 == 0) {
            sum += i;
        }
    }
    
    console.log(`The sum: ${sum}`);
    
    for(i = firstNum; i <= secondNum; i++) {
        if(i % 9 == 0) {
            sum += i;
            console.log(i);
        }
    }
    
    }
    
    numsDevided((["100", "200"]));