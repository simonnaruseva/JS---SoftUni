function printData(input) {
let index = 0;

let username = input[index];
index++;
let password = input[index];
index++;
let currentPass = input[index];
index++;

while(password !== currentPass) {
    currentPass = input[index];
    index++;
    console.log(currentPass);
 
}
// if(currentPass == password) {
//     console.log(`Welcome ${username}!`);
// }

console.log(`Welcome ${username}!`);
}

// printData((["Gosho", "secret", "secret"]));
printData((["Nakov",

"1234",

"Pass",

"1324",

"12"]))