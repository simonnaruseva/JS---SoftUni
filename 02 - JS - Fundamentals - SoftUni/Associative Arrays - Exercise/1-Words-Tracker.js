function printOccurrences(input) {
     let [firstWord, secondWord] =  input.shift().split(" ")

    for(let i = 0; i < input.length; i++) {
       let word = input[i];
       console.log(word)
    }
}

printOccurrences([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)