function findMaxNumbersLefttoRight(input) {
    for (let i = 1; i < input.length; i++) {
        if (input[i] >= input[i - 1]) {
            input.splice(i-1, 1);
            i = 0;            
        }
    }
    console.log(input.join(" "));
}


// findMaxNumbersLefttoRight([41, 41, 34, 20]);
// findMaxNumbersLefttoRight([1, 4, 3, 2]);
findMaxNumbersLefttoRight([14, 24, 3, 19, 15, 17]);
// findMaxNumbersLefttoRight([41, 41, 34, 20]);
// findMaxNumbersLefttoRight([27, 19, 42, 2, 13, 45, 48]);