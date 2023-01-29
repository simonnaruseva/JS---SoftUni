function printInfo(input) {
let person = {};

for(let i = 0; i < input.length; i++) {
    let [name, phone] = input[i].split(" ");
    person[name] = phone;
}

for(let [key, value] of Object.entries(person)) {
    console.log(`${key} -> ${value}`);
    }
}

printInfo(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)