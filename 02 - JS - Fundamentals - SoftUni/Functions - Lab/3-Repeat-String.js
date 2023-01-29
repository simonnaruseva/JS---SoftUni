function repeatString(str, countRepeat) {
let newStr = '';

for(i = 1; i <= countRepeat; i++) {
newStr += str;
}

return newStr;

}

console.log(repeatString("abc", 3));