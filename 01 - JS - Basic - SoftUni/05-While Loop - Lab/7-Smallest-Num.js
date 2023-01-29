function printSmallestNum(input) {
let index = 0;
let command = input[index];

let minNum = Number.MAX_SAFE_INTEGER;

while(command !== 'Stop') {
    let number = Number(command);

    if(number < minNum) {
        minNum = number;
    }

    command = input[index];
    index++;
}
console.log(minNum);
}

printSmallestNum((["100","99","80","70","Stop"]))
// printSmallestNum((["-10", "20", "-30", "Stop"]))
// printSmallestNum((["45", "-20", "7", "99", "Stop"]))
// printSmallestNum((["999", "Stop"]))
// printSmallestNum((["-1", "-2", "Stop"]))
