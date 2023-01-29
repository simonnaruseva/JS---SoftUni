function printComparision(searchedWord, text) {
  let isFound = false;
  let words = text.split(" ");

   for (let word of words) {
      if(word.toLowerCase() === searchedWord.toLowerCase()) {
        isFound = true;
        console.log(searchedWord)
      }
   }
   
   if(!isFound) {
    console.log(`${searchedWord} not found!`);
  }
}

printComparision('python',
'JavaScript is the best programming language'

)