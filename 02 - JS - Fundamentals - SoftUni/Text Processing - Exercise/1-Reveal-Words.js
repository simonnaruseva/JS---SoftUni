function solve(searchedWords, text) {
let words = searchedWords.split(", ");

words.forEach(element => {
    text = text.replace('*'.repeat(element.length), element);
    
})

console.log(text)
}

solve('great',
'softuni is ***** place for learning new programming languages'
)

// solve('great, learning',
// 'softuni is ***** place for ******** new programming languages'
// )