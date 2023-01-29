function sumAccountBalance(input) {
let index = 0;
let command = input[index];
index++;

let sum = 0;

while(command != "NoMoreMoney") {
let money = Number(command);

if(money < 0) {
    console.log(`Invalid operation!`);
    break;
}

sum += money;
command = input[index];
index++;

console.log(`Increase:  ${money}`);
}
console.log(`Total: ${sum}`);
}


// sumAccountBalance((["5.51",

// "69.42",

// "100",

// "NoMoreMoney"]))

sumAccountBalance((["120", "45.55", "-150"]))