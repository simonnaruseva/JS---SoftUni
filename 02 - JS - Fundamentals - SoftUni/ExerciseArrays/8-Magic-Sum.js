function magicSum(input) {
    let inputSequence = input[0].split(" ").map(Number);
    let num = Number(input[1]);

    for (let i = 0; i < inputSequence.length - 1; i++) {
        for (let j = i + 1; j < inputSequence.length; j++) {
            let sum = inputSequence[i] + inputSequence[j];
            if (sum === num) {
                console.log(`${inputSequence[i]} ${inputSequence[j]}`)
            }
        }
    }
}
magicSum(['1 7 6 2 19 23', '8'])
magicSum(['14 20 60 13 7 19 8', '27'])
magicSum(['1 2 3 4 5 6', '6'])