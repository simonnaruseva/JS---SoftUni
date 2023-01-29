function printLargestNum(input) {
    let index = 0;
    let command = input[index];
    
    let maxNum = Number.MIN_SAFE_INTEGER;

    while(command !== 'Stop') {
        let num = Number(command);

        if(num > maxNum) {
            maxNum = num;
        }
        command = input[index];
        index++;
    }

    console.log(maxNum);
}

// printLargestNum((["100","99","80","70","Stop"]))
// printLargestNum(["-10", "20", "-30", "Stop"])
//printLargestNum(["45", "-20", "7", "99", "Stop"])
//printLargestNum(["999", "Stop"])
printLargestNum(["-1", "-2", "Stop"])