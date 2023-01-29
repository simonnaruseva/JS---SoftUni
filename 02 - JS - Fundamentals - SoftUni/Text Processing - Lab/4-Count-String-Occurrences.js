function printOccurrences(text, searchedWord) {
    let words = text.split(" ");
    let counter = 0;

    for(let word of words) {
        if(word === searchedWord) {
            counter++;
        }
    } 
    
   console.log(counter);
}

printOccurrences('This is a word and it also is a sentence',
'is'
)