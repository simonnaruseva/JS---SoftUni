function convretToObject(input) {
let person = JSON.parse(input);

for (let i in person) {
   console.log(`${i}: ${person[i]}`)
}
}

convretToObject('{"name": "George", "age": 40, "town": "Sofia"}')