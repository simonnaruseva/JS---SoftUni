function printReplacedText(text, word) {
text = text.replace(word, "*".repeat(word.length));

while(text.includes(word)) {
    text = text.replace(word, "*".repeat(word.length));
}

console.log(text);
}

printReplacedText('Find the hidden word', 'hidden')